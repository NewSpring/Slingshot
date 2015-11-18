import React from "react";

const StepsBar = React.createClass({

  render() {

    let steps = [];
    for (let i = 1; i <= this.props.steps; i++) {
      if (i < this.props.active) {
        steps.push(<li className="steps__item steps__item--completed">{i}</li>);
      }
      else if (i === this.props.active) {
        steps.push(<li className="steps__item steps__item--active">{i}</li>);
      }
      else {
        steps.push(<li className="steps__item">{i}</li>);
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
