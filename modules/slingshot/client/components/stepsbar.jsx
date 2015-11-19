import React from "react";

const StepsBar = React.createClass({

  render() {

    let steps = [];
    for (let i = 1; i <= this.props.steps; i++) {
      if (i < this.props.active || this.props.active > this.props.length) {
        steps.push(<li className="flush steps__item steps__item--completed" key={i}>{i}</li>);
      }
      else if (i === this.props.active) {
        steps.push(<li className="flush steps__item steps__item--active" key={i}>{i}</li>);
      }

      else {
        steps.push(<li className="flush steps__item" key={i}>{i}</li>);
      }
    }

    return (
      <ul className="steps">
        {steps}
      </ul>
    );

  }
});


export default StepsBar
