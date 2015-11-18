const Adal = Npm.require("adal-node");

const clientId = Meteor.settings.azure.AZURE_CLIENT_ID,
      key = Meteor.settings.azure.AZURE_SHARED_KEY,
      resourceURI = "https://management.azure.com/",
      authority = `https://login.microsoftonline.com/${Meteor.settings.azure.AZURE_TENANT_ID}`;

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

