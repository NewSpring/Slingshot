import { Component } from "react";

export default class Logo extends Component {

  tempStyles = {
    width: "100px",
    height: "100px"
  }

  render() {

    return (
      <div className="locked-top locked-bottom one-whole floating">
        <div className="floating__item" style={this.tempStyles}>
          <img src="http://www.rockrms.com/Assets/Icons/touch-icon-iphone-retina.png"/>
        </div>
      </div>
    );

  }

}
