const AzureCommon = Npm.require("azure-common");
const Resource = Npm.require("azure-arm-resource");

const resourceURI = "https://management.azure.com/";

Azure.deployment = {};
Azure.deployment.create = (resourceGroupName, deploymentName) => {
  check(resourceGroupName, String);
  check(deploymentName, String);

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
        parameters: 
          {
            "siteName": {
              "value": deploymentName
            },
            "hostingPlanName": {
              "value": "NewServiceAppPlan"
            },
            "siteLocation": {
              "value": "East US"
            },
            "serverName": {
              "value": deploymentName
            },
            "serverLocation": {
              "value": "East US"
            },
            "administratorLogin": {
              "value": "NewAdmin"
            },
            "administratorLoginPassword": {
              "value": "1hundredK"
            },
            "databaseName": {
              "value": deploymentName
            }
          }
          ,
        mode: "Incremental"
      }
    }

    resourceClient.deployments.createOrUpdate(
      resourceGroupName,
      deploymentName,
      parameters,
      (err, result) => {

      if (err) {
        throw new Meteor.Error(`Unable to create deployment: ${err.stack}`);
      }

      console.log(result);

    });

  });

}

Azure.deployment.remove = (resourceGroupName, deploymentName) => {
  check(resourceGroupName, String);
  check(deploymentName, String);

  Azure.token.get((err, result) => {

    if (err) {
      throw new Meteor.Error(`Unable to authenticate: ${err.stack}`);
    }

    let credentials = new AzureCommon.TokenCloudCredentials({
      subscriptionId: Meteor.settings.azure.AZURE_SUBSCRIPTION_ID,
      token: result.accessToken
    });

    let resourceClient = Resource.createResourceManagementClient(credentials, resourceURI);

    resourceClient.deployments.deleteMethod(
      resourceGroupName,
      deploymentName,
      (err, result) => {

      if (err) {
        throw new Meteor.Error(`Unable to delete deployment: ${err.stack}`);
      }

      console.log(result);

    });


  });

}
