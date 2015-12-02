Azure = {};

if (!Meteor.settings.azure ||
    !Meteor.settings.azure.AZURE_CLIENT_ID ||
    !Meteor.settings.azure.AZURE_SHARED_KEY ||
    !Meteor.settings.azure.AZURE_TENANT_ID ||
    !Meteor.settings.azure.AZURE_SUBSCRIPTION_ID ||
    !Meteor.settings.azure.AZURE_DNS_RESOURCE_GROUP_NAME ||
    !Meteor.settings.azure.AZURE_DNS_ZONE_NAME ||
    !Meteor.settings.ssl.cert ||
    !Meteor.settings.ssl.password
  ) {

    throw new Meteor.Error("Azure api credientials are missing");

}
