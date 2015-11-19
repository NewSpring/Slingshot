import React from "react";
import ReactMixin from "react-mixin";

import Hero from "./hero"
import Ad from "./ad"
import Account from "./account"

import RockApi from "./../collections"
// window not available on server for SSR
// window.RockApi = RockApi;


const Home = React.createClass({
  //
  // mixins: [ReactMeteorData],
  //
  // getMeteorData() {
  //   var channelHandle = Meteor.subscribe("rock.content-channels");
  //   var channelItemHandle = Meteor.subscribe("rock.content-channel-items");
  //
  //   return {
  //     isLoading: !(channelHandle.ready() && channelItemHandle.ready()),
  //     contentChannels: RockApi.contentChannels.find().fetch(),
  //     contentChannelItems: RockApi.contentChannelItems.find().fetch()
  //   };
  // },

  render() {

    return (
      <div>
        <Hero />
        <Ad />
        <Account />
      </div>
    );
  }
})


export default Home
