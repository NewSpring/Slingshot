import React from "react";

const StepsBar = React.createClass({

  render() {

    return (
      <ul className="steps">
      	<li className="steps__item steps__item--completed">1</li>
		<li className="steps__item steps__item--active">2</li>
      	<li className="steps__item">3</li>
      </ul>
    );

  }
});


export default StepsBar
