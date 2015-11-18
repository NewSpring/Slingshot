const AzureCommon = Npm.require("azure-common");
const Resource = Npm.require("azure-arm-resource");

const resourceURI = "https://management.azure.com/";

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
