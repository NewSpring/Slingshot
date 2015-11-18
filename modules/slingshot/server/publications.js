const settings = Meteor.settings.rock;
const channelName = "External Website Ads";

if(!settings) {
  console.log("There are no rock connection settings, so no API subscriptions will be available");
}

const headers = {};

if(settings.token && settings.tokenName) {
  headers[settings.tokenName] = settings.token;
}

REST2DDP.publish("rock.ads", {
  collectionName: "rock.content-channel-items",
  restUrl: `${settings.baseURL}api/ContentChannelItems?$expand=ContentChannel&$filter=ContentChannel/Name eq '${channelName}'`,
  headers
});
