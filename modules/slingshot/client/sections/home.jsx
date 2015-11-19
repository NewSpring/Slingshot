import React from "react";

import Hero from "./hero"
import Ad from "./ad"
import Account from "./account"
import RockApi from "../collections"

const Home = React.createClass({

  mixins: [ReactMeteorData],

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

    return this.data.ads.map((ad, index) => {
      let json = ad.Content;
      let content = JSON.parse(json);

      return <Ad
        isPrimary={ index === 0 }
        subTitle={ content.subTitle }
        points={ content.points }
        linkText={ content.linkText }
        link={ content.link }
        title={ ad.Title }
        key={ ad.Id } />;
    });
  },

  render() {
    return (
      <div>
        <Hero />
        <section className="constrain-page soft-double-ends@lap-and-up">
          <div className="grid soft-double-ends@lap-and-up">
            { this.renderAds() }
          </div>
        </section>
        <Account />
      </div>
    );
  }
})


export default Home
