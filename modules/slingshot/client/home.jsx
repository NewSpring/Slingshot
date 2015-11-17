import React from "react";
import ReactMixin from "react-mixin";

import NavBar from "./sections/navbar"
import Hero from "./sections/hero"
import Ad from "./sections/ad"
import Footer from "./sections/footer"
import Input from "./components/input"

// TODO: import collections

// @ReactMixin.decorate(ReactMeteorData)
const Home = React.createClass({

  isValid(){
    console.log("is valid");
    return true;
  },

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
