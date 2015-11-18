import React from "react";
import ReactMixin from "react-mixin";

import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Input from "./components/input"

import RockApi from "./collections"
// window not available on server for SSR
// window.RockApi = RockApi;


const SignUp = React.createClass({

  mixins: [ReactMeteorData],

  isValid(){
    console.log("is valid");
    return true;
  },

  getMeteorData() {
    var channelHandle = Meteor.subscribe("rock.content-channels");
    var channelItemHandle = Meteor.subscribe("rock.content-channel-items");

    return {
      isLoading: !(channelHandle.ready() && channelItemHandle.ready()),
      contentChannels: RockApi.contentChannels.find().fetch(),
      contentChannelItems: RockApi.contentChannelItems.find().fetch()
    };
  },

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
        <section>
          <div className="grid">
            <div className="grid__item one-half@lap-and-up">
              <h2>Stuff</h2>
            </div><div className="grid__item one-half@lap-and-up">
              <h2>Stuff</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
})


export default SignUp
