import { Component } from "react";
import ReactMixin from "react-mixin";

import Title from "./components/title";
import Logo from "./components/logo";

// TODO: import collections

// @ReactMixin.decorate(ReactMeteorData)
export default class Home extends Component {

  // TODO: fetch data
  // getMeteorData() {
  // }

  render() {
    // TODO: wait for subscriptions
    // if (!this.data) {
    //   // loading
    //   return null;
    // }

    return (
      <div>
        <Title />
        <Logo />
      </div>
    );
  }
};
