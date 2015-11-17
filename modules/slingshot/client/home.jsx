import React from "react";
import ReactMixin from "react-mixin";

import NavBar from "./sections/navbar"
import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Footer from "./sections/footer"
import Input from "./components/input"


import RockApi from "./collections"
window.RockApi = RockApi;


const Home = React.createClass({

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
        <NavBar />

        <Hero />
        <Ad />

        <form>
          <Input
            label="Layout Label"
            name="firstName"
            type="text"
            placeholder="Test Placeholder"
            class="stuff"
            disabled=""
            id="firstName"
            validation={this.isValid}
            validationErrorMessage="You Need A Name"
          />
        </form>

        <Footer />
      </div>
    );
  }
})


export default Home
