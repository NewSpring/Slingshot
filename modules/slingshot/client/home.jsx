import { Component } from "react";
import ReactMixin from "react-mixin";

import Title from "./components/title";
import Logo from "./components/logo";
import Input from "./components/input";

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
      </div>
    );
  }
};
