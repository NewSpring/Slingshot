
import React from "react";
import Pastors from "./../components/pastors"
import Devs from "./../components/devs"


const Ad = React.createClass({
  render() {

    return (
      <section className="constrain-page soft-double-ends@lap-and-up">
          <div className="grid soft-double-ends@lap-and-up">
            <div className="grid__item one-whole@handheld one-half@lap-and-up">
              <div className="soft-double-ends soft-double-sides@lap-and-up">
                <Pastors />
              </div>
            </div>
            <div className="grid__item one-whole@handheld one-half@lap-and-up">
              <div className="soft-double-ends soft-double-sides@lap-and-up">
                <Devs />
              </div>
            </div>
        </div>
      </section>
    );

  }
});


export default Ad
