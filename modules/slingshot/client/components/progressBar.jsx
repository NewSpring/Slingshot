import React from "react";

const ProgressBar = React.createClass({

  render() {
    let width = this.props.value || 0;

    if(width > 100) {
      width = 100;
    }
    else if(width < 0) {
      width = 0;
    }

    return (
      <div style={{
        "background-color": "#8e4604",
        height: "30px",
        width: "100%",
        padding: "2px"
      }}>
        <div style={{
          "background-color": "#ee7624",
          height: "100%",
          width: width + "%"
        }}>
        </div>
      </div>
    );
  }
});


export default ProgressBar
