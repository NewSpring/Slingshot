"use strict";

const azure = require("azure-common"),
      dns = require("azure-arm-dns"),
      adal = require("adal-node");

const clientId = process.env.AZURE_CLIENT_ID,
      key = process.env.AZURE_SHARED_KEY,
      resourceURI = "https://management.core.windows.net/",
      authority = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
      resourceGroupName = process.env.AZURE_RESOURCE_GROUP_NAME,
      dnsZoneName = process.env.AZURE_DNS_ZONE_NAME;


function getToken(cb) {
  let context = new adal.AuthenticationContext(authority, false);
  context.acquireTokenWithClientCredentials(resourceURI, clientId, key, cb);
}

function printToken() {
  getToken((err, result) => {
    console.log(result.accessToken);
  });
}

function createCNAME(cname, url) {

  if (!url) {
    throw new Error("Must provide a url");
  }

  getToken((err, result) => {

    if (err) {
      throw new Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new azure.TokenCloudCredentials({
      subscriptionId: process.env.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let dnsClient = dns.createDnsManagementClient(credentials, resourceURI);

    let cnameParams = {
      recordSet: {
        properties: {
          cnameRecord: {
            cname: url
          },
          ttl: 3600
        },
        location: "global"
      }
    };

    dnsClient.recordSets.createOrUpdate(resourceGroupName, dnsZoneName, cname, "CNAME", cnameParams, (err, result) => {

      if (err) {
        throw new Error(`Unable to create CNAME: ${err.stack}`);
      }

      console.log(result);
    });

  });

}

module.exports = {
  createCNAME: createCNAME,
  printToken: printToken
}

module.exports.createCNAME("meow", "wtfrock.azurewebsites.net");
// module.exports.printToken();
