import React from "react";
import { Link } from 'react-router'


import StepsBar from "./components/stepsbar";
import Input from "./components/input";
import Validation from "./components/validation"

const ChurchInfo = React.createClass({

  render() {
    return (
      <section className="constrain-page soft-double-ends@lap-and-up soft-double-bottom@handheld">
        <div className="grid push-double-top">
          <div className="grid__item text-center">
            <StepsBar steps={4} active={3} />
          </div>
        </div>
        <h3 className="text-center push-ends soft-double-top">
          Church Information
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <Input
            name="Church Name"
            classes="soft-ends"
          />
          <Input
            name="Short Name"
            classes="soft-ends"
          />

          <div className="grid push-top">
            <div className="grid__item one-half">
              <Link to="/signup/step-2">
                <button className="btn--secondary one-whole">Back</button>
              </Link>
            </div>
            <div className="grid__item one-half">
              <Link to="/signup/step-4">
                <button className="btn--filled one-whole">
                  Next
                </button>
              </Link>
            </div>

          </div>
        </div>


      </section>
    );

  }

});

export default ChurchInfo
