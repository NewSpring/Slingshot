import React from "react";
import ReactMixin from "react-mixin";

import NavBar from "./sections/navbar"
import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Footer from "./sections/footer"
import Input from "./components/input"
import RockApi from "./collections"

const Home = React.createClass({

  mixins: [ReactMeteorData],

  isValid(){
    console.log("is valid");
    return true;
  },

  getMeteorData() {
    const adHandle = Meteor.subscribe("rock.ads");

    return {
      isLoading: !adHandle.ready(),
      ads: RockApi.contentChannelItems.find({}, { sort: { Priority: -1 } }).fetch()
    };
  },

  renderAds() {
    if (this.data.isLoading) {
      return (
        <div>
          Loading!
        </div>
      );
    }

    return this.data.ads.map((ad) => {
      console.log(ad);
      let json = ad.Content;
      let content = JSON.parse(json);

      return <Ad
        subTitle={ content.subTitle }
        points={ content.points }
        title={ ad.Title }
        key={ ad.Id } />;
    });
  },

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <section className="hard">
          <div className="grid flush one-whole">
            {this.renderAds()}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
})


export default Home
