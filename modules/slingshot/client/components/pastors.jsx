
import React from "react";


const Pastors = React.createClass({
  render() {

    return (
      <div>
        <h2 className="text-primary"> Rock For Pastors </h2>
        <h4>
          Get setup and start taking better care of your community in less than 5 mins.
        </h4>
        <div className="soft">
          <ul>
            <li>One-click easy install</li>
            <li>Hosted for you, no techincal knowledge required.</li>
            <li>Scaleable for your growing church</li>
            <li>Low cost monthly subscription.</li>
          </ul>
        </div>

        <button className="btn--filled">Get Started</button>
      </div>
    );

  }

})

export default Pastors
