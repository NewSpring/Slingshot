import { Component } from "react";
import ReactMixin from "react-mixin";

import NavBar from "./sections/navbar"
import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Footer from "./sections/footer"

// TODO: import collections

// @ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {

  // TODO: fetch data
  // getMeteorData() {
  // }

  isValid(){
    console.log("is valid");
    return true;
  }

  render() {
    // TODO: wait for subscriptions
    // if (!this.data) {
    //   // loading
    //   return null;
    // }

    return (
      <div>
        <NavBar />
        <Hero />
        <Ad />
        <Footer />
      </div>
    );
  }
};
