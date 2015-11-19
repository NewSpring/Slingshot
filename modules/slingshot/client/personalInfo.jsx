import React from "react";
import { Link } from 'react-router'

import StepsBar from "./components/stepsbar";
import Input from "./components/input";
import Validation from "./components/validation"

const PersonalInfo = React.createClass({

  render() {
    return (
      <section className="constrain-page soft-double-ends@lap-and-up soft-double-bottom@handheld">
        <div className="grid push-double-top">
          <div className="grid__item text-center">
            <StepsBar steps={4} active={2} />
          </div>
        </div>
        <h3 className="text-center push-ends soft-double-top">
          Personal Information
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <Input
            name="First Name"
            classes="soft-ends"
          />
          <Input
            name="Last Name"
            classes="soft-ends"
          />
          <Input
            name="Email Address"
            classes="soft-ends"
            validation={Validation.email}
          />

          <div className="grid push-top">
            <div className="grid__item one-half">
              <Link to="/signup/step-1">
                <button className="btn--secondary one-whole">Back</button>
              </Link>
            </div>
            <div className="grid__item one-half">
              <Link to="/signup/step-3">
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

export default PersonalInfo
