"use strict";

const azure = require("azure-common"),
      dns = require("azure-arm-dns"),
      adal = require("adal-node");

const clientId = process.env.AZURE_CLIENT_ID,
      key = process.env.AZURE_SHARED_KEY,
      resourceURI = "https://management.core.windows.net/",
      authority = `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`;

module.exports = function Slingshot(){

  let context = new adal.AuthenticationContext(authority, false);

  context.acquireTokenWithClientCredentials(resourceURI, clientId, key, (err, result) => {

    if (err) {
      throw new Error(`Unable to authenticate: ${err.stack}`);
    }

    console.log(result.accessToken);

  });

}

module.exports();
