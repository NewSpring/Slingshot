import React from "react";
import { Link } from 'react-router'

import StepsBar from "./../components/stepsbar";
import Input from "./../components/input";
import Validation from "./../components/validation"

const PersonalInfo = React.createClass({

  saveAndContinue: function(event) {
    event.preventDefault();

    // Get values via this.refs
    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
    }

    if (data.firstName && data.lastName && Validation.email(data.email)) {
      this.props.saveValues(data)
      this.props.nextStep("/signup/step-3")
    }

  },

  goBack(event){
    event.preventDefault();

    const data = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
    }

    if (data.firstName && data.lastName && Validation.email(data.email)) {
      this.props.saveValues(data);
    }

    this.props.previousStep("/signup");
  },

  render() {
    return (
      <div>
        <h3 className="text-center push-ends soft-double-top@lap-and-up">
          Personal Information
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <Input
            name="First Name"
            id="firstName"
            classes="soft-ends"
            defaultValue={this.props.fieldValues.firstName}
          />
          <Input
            name="Last Name"
            id="lastName"
            classes="soft-ends"
            defaultValue={this.props.fieldValues.lastName}
          />
          <Input
            name="Email Address"
            id="email"
            classes="soft-ends"
            validation={Validation.email}
            defaultValue={this.props.fieldValues.email}
          />

          <div className="grid push-top">
            <div className="grid__item one-half">

              <button className="btn--secondary one-whole" onClick={this.goBack}>Back</button>

            </div>
            <div className="grid__item one-half">
              <button className="btn--filled one-whole" onClick={this.saveAndContinue}>
                Next
              </button>
            </div>

          </div>
        </div>


      </div>
    );

  }

});

export default PersonalInfo
