import React from "react";

import StepsBar from "./components/stepsbar";
import Input from "./components/input";
import Validation from "./components/validation"

const Success = React.createClass({

  render() {
    return (
      <section className="constrain-page soft-double-ends@lap-and-up soft-double-bottom@handheld">
        <div className="grid push-double-top">
          <div className="grid__item text-center">
            <StepsBar steps={4} active={5} />
          </div>
        </div>
        <h3 className="text-center push-ends soft-double-top">
          Great Success
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <p>
            Your account has been created and your first payment has been approved. Now it's time to get started with RockRMS!
          </p>
          <div className="text-center soft-ends">
            <button type="submit" className="btn--filled">
              Set Up My Rock
            </button>
          </div>
        </div>

      </section>
    );

  }

});

export default Success
