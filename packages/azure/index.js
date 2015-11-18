
const AzureCommon = Npm.require("azure-common");
const Dns = Npm.require("azure-arm-dns");
const Adal = Npm.require("adal-node");
const Resource = Npm.require("azure-arm-resource");


Azure = {};

if (!Meteor.settings.azure ||
    !Meteor.settings.azure.AZURE_CLIENT_ID ||
    !Meteor.settings.azure.AZURE_SHARED_KEY ||
    !Meteor.settings.azure.AZURE_TENANT_ID ||
    !Meteor.settings.azure.AZURE_SUBSCRIPTION_ID ||
    !Meteor.settings.azure.AZURE_DNS_RESOURCE_GROUP_NAME ||
    !Meteor.settings.azure.AZURE_DNS_ZONE_NAME
  ) {

    throw new Meteor.Error("Azure API credentials are missing");

}

const clientId = Meteor.settings.azure.AZURE_CLIENT_ID,
      key = Meteor.settings.azure.AZURE_SHARED_KEY,
      resourceURI = "https://management.azure.com/",
      authority = `https://login.microsoftonline.com/${Meteor.settings.azure.AZURE_TENANT_ID}`,
      dnsResourceGroupName = Meteor.settings.azure.AZURE_DNS_RESOURCE_GROUP_NAME,
      dnsZoneName = Meteor.settings.azure.AZURE_DNS_ZONE_NAME;

Azure.token = {};
Azure.token.get = (cb) => {
  let context = new Adal.AuthenticationContext(authority, false);
  context.acquireTokenWithClientCredentials(resourceURI, clientId, key, cb);
}

Azure.token.print = () => {
  Azure.token.get((err, result) => {
    console.log(result.accessToken);
  });
}


Azure.cname = {};
Azure.cname.create = (cname, url) => {
  check(cname, String);
  check(url, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let dnsClient = Dns.createDnsManagementClient(credentials, resourceURI);

    Azure.cname.exists(dnsClient, cname, (exists) => {

      if (!exists) {

        let cnameParams = {
          recordSet: {
            properties: {
              cnameRecord: {
                cname: url
              },
              ttl: 300
            },
            location: "global"
          }
        };

        dnsClient.recordSets.createOrUpdate(
          dnsResourceGroupName,
          dnsZoneName,
          cname,
          "CNAME",
          cnameParams,
          (err, result) => {

          if (err) {
            throw new Meteor.Error(`Unable to create CNAME: ${err.stack}`);
          }

          console.log(result);
        });
      }

      else {
        throw new Meteor.Error(`CNAME ${cname} already exists`);
      }

    });

  });

}

Azure.cname.remove = (cname) => {
  check(cname, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let dnsClient = Dns.createDnsManagementClient(credentials, resourceURI);

    Azure.cname.exists(dnsClient, cname, (exists) => {

      if (exists) {
        dnsClient.recordSets.deleteMethod(
          dnsResourceGroupName,
          dnsZoneName,
          cname,
          "CNAME",
          {},
          (err, result) => {

          if (err) {
            throw new Meteor.Error(`Unable to delete CNAME: ${err.stack}`);
          }

          console.log(result);

        });
      }

      else {
        throw new Meteor.Error(`CNAME ${cname} does not exist`);
      }

    });

  });
}

Azure.cname.exists = (dnsClient, cname, cb) => {
  dnsClient.recordSets.list(
    dnsResourceGroupName,
    dnsZoneName,
    "CNAME",
    (err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to list CNAMEs: ${err.stack}`);
    }

    cnameList = result.recordSets.map((result) => {
      return result.name
    });

    const exists = cnameList.indexOf(cname) > -1;

    cb(exists);

  });
}

Azure.resourceGroup = {}
Azure.resourceGroup.create = (name) => {
  check(name, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let resourceClient = Resource.createResourceManagementClient(credentials, resourceURI);

    resourceClient.resourceGroups.checkExistence(name, (err, result) => {

      if (err.code === "NotFound") {
        const parameters = {
          location: "East US"
        }

        resourceClient.resourceGroups.createOrUpdate(
          name,
          parameters,
          (err, result) => {

          if (err) {
            throw new Meteor.Error(`Could not create resource group: ${err.stack}`);
          }

          console.log(result);

        });
      }

      else {
        throw new Meteor.Error(`Resource Group ${name} already exists`);
      }

    });

  });

}

Azure.resourceGroup.remove = (name) => {
  check(name, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let resourceClient = Resource.createResourceManagementClient(credentials, resourceURI);

    resourceClient.resourceGroups.deleteMethod(name, (err, result) => {

      if (err) {
        throw new Meteor.Error(`Unable to delete resource group ${name}: ${err.stack}`);
      }

      console.log(result);
    });

  });

}

Azure.deployment = {};
Azure.deployment.create = (resourceGroupName, deploymentName) => {
  check(name, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let resourceClient = Resource.createResourceManagementClient(credentials, resourceURI);

    let parameters = {
      properties: {
        templateLink: {
          uri: "https://raw.githubusercontent.com/NewSpring/Slingshot/master/.templates/azuredeploy.json"
        },
        parametersLink: {
          uri: "https://raw.githubusercontent.com/NewSpring/Slingshot/master/.templates/azuredeploy-parameters.json"
        }
      }
    }

    resourceClient.createOrUpdate(resourceGroupName, deploymentName, parameters, (err, result) => {

      if (err) {
        throw new Meteor.Error(`Unable to create deployment: ${err.stack}`);
      }

      console.log(result);

    });

  });

}
