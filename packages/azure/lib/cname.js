const AzureCommon = Npm.require("azure-common");
const Dns = Npm.require("azure-arm-dns");

const resourceURI = "https://management.azure.com/",
      dnsResourceGroupName = Meteor.settings.azure.AZURE_DNS_RESOURCE_GROUP_NAME,
      dnsZoneName = Meteor.settings.azure.AZURE_DNS_ZONE_NAME;

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
