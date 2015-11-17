const settings = Meteor.settings.rock;

if(!settings) {
  console.log("There are no rock connection settings, so no API subscriptions will be available");
}

const headers = {};

if(settings.token && settings.tokenName) {
  headers[settings.tokenName] = settings.token;
}

REST2DDP.publish("rock.content-channels", {
  collectionName: "rock.content-channels",
  restUrl: `${settings.baseURL}api/contentchannels`,
  headers
});

REST2DDP.publish("rock.content-channel-items", {
  collectionName: "rock.content-channel-items",
  restUrl: `${settings.baseURL}api/contentchannelitems`,
  headers
});
