const RockApi = {
  contentChannels: new Mongo.Collection("rock.content-channels"),
  contentChannelItems: new Mongo.Collection("rock.content-channel-items")
};

export default RockApi
