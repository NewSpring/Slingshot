
import React from "react";


const Devs = React.createClass({

  render() {

    return (
      <div className="push-double-sides">
        <h2 className="text-center@handheld">Rock For Developers</h2>
        <h4>
          Implement a solution for your church with all the flexibiilty you need.
        </h4>
        <div className="soft">
          <ul>
            <li>Customize your Rock RMS install.</li>
            <li>Hosted on your own platform</li>
            <li>Open source, contribute to the community.</li>
            <li>Free of charge - donations suggested.</li>
          </ul>
        </div>

        <button className="btn--secondary">Download Rock</button>
      </div>
    );

  }

})


export default Devs
