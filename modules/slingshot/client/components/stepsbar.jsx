import React from "react";

const StepsBar = React.createClass({

  render() {

    return (
      <ul className="list-steps">
      	<li className="step--completed">1</li>
		<li className="step--active">2</li>
      	<li>3</li>
      </ul>
    );

  }
});


export default StepsBar
