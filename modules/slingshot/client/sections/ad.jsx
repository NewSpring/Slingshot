
import React from "react";
import Pastors from "./../components/pastors"
import Devs from "./../components/devs"


const Ad = React.createClass({
  render() {

    return (
      <section className="hard">
        <div className="shell">
          <div className="grid flush one-whole">
            <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
              <div className="soft soft-double-top">
                <Pastors />
              </div>
            </div>
            <div className="grid__item hard one-whole visuallyhidden@lap-and-up">
              <div className="soft-sides">
                <hr className="one-whole flush-ends"></hr>
              </div>
            </div>
            <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
              <div className="soft soft-double-top">
                <Devs />
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  }
});


export default Ad
