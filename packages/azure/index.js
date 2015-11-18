
const AzureCommon = Npm.require("azure-common");
const Dns = Npm.require("azure-arm-dns");
const Adal = Npm.require("adal-node");


Azure = {};

if (!Meteor.settings.azure ||
    !Meteor.settings.azure.AZURE_CLIENT_ID ||
    !Meteor.settings.azure.AZURE_SHARED_KEY ||
    !Meteor.settings.azure.AZURE_TENANT_ID ||
    !Meteor.settings.azure.AZURE_SUBSCRIPTION_ID ||
    !Meteor.settings.azure.AZURE_RESOURCE_GROUP_NAME ||
    !Meteor.settings.azure.AZURE_DNS_ZONE_NAME
  ) {

    throw new Meteor.Error("Rock api credientials are missing");

}

const clientId = Meteor.settings.azure.AZURE_CLIENT_ID,
      key = Meteor.settings.azure.AZURE_SHARED_KEY,
      resourceURI = "https://management.azure.com/",
      authority = `https://login.microsoftonline.com/${Meteor.settings.azure.AZURE_TENANT_ID}`,
      resourceGroupName = Meteor.settings.azure.AZURE_RESOURCE_GROUP_NAME,
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
          resourceGroupName,
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
          resourceGroupName,
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
    resourceGroupName,
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
