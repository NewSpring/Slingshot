import { Component } from "react";

export default class SlingPic extends Component {

  tempStyles = {
    width: "25px"
  }

  render() {

    return (
      <img src={this.props.image} style={this.tempStyles} />
    );

  }

}
