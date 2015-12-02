const https = Npm.require("https"),
      querystring = Npm.require("querystring");

const resourceURI = "management.azure.com",
      subscriptionId = Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      pfxBlob = Meteor.settings.azure.AZURE_PFX_BLOB,
      pfxPass = Meteor.settings.azure.AZURE_PFX_PASS

Azure.cert = {};

Azure.cert.add = (resourceGroupName, cb) => {
  check(resourceGroupName, String);

  Azure.token.get((err, result) => {
    const token = result.accessToken;

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    const path = [
      "/subscriptions/",
      subscriptionId,
      "/resourceGroups/",
      resourceGroupName,
      "/providers/Microsoft.Web/certificates/",
      resourceGroupName,
      "?api-version=2014-11-01"
    ].join("");

    const headers = [
      { "Content-Type": "application/json" },
      { "Authorization": `Bearer ${token}` }
    ];

    const body = querystring.stringify({
      "name": resourceGroupName,
      "type": "Microsoft.Web/certificates",
      "location": "East US",
      "properties": {
        "pfxBlob": pfxBlob,
        "password": pfxPass
      }
    });

    const options = {
      host: resourceURI,
      path: path,
      method: "PUT",
      headers: headers
    };

    const req = https.request(options, (res) => {
      cb(res);
    });

    req.on("error", (err) => {
      console.log(`Error: ${err.message}`);
    });

    req.write(body);
    req.end();

  });

};
