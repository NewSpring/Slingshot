import { Component } from "react";
import ReactMixin from "react-mixin";

// TODO: import collections

// @ReactMixin.decorate(ReactMeteorData)
export default class home extends Component {

  // TODO: fetch data
  // getMeteorData() {
  // }

  render() {
    // TODO: wait for subscriptions
    // if (!this.data) {
    //   // loading
    //   return null;
    // }

    let tempStyles = {
      width: "100px",
      height: "100px"
    }

    return (
      <div className="locked-top locked-bottom one-whole floating">
        <div className="floating__item" style={tempStyles}>
          <img src="http://www.rockrms.com/Assets/Icons/touch-icon-iphone-retina.png"/>
        </div>
      </div>
    );
  }
};
