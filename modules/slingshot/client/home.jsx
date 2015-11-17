import { Component } from "react";
import ReactMixin from "react-mixin";

import NavBar from "./sections/navbar"
import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Footer from "./sections/footer"

import RockApi from "./collections"
window.RockApi = RockApi;

@ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {

  getMeteorData() {
    var channelHandle = Meteor.subscribe("rock.content-channels");
    var channelItemHandle = Meteor.subscribe("rock.content-channel-items");

    return {
      isLoading: !(channelHandle.ready() && channelItemHandle.ready()),
      contentChannels: RockApi.contentChannels.find().fetch(),
      contentChannelItems: RockApi.contentChannelItems.find().fetch()
    };
  }

  render() {
    if (this.data.isLoading) {
      return (
        <div>
          Loading!
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        { this.data.contentChannelItems.map((task) => {
          return (
            <p dangerouslySetInnerHTML={__html: task.Content}>
            </p>
          );
        }) }
        <Hero />
        <Ad />
        <Footer />
      </div>
    );
  }
};
