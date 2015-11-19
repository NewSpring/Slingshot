import React from "react";
import { Link } from 'react-router'

import StepsBar from "./../components/stepsbar";
import Input from "./../components/input";
import Validation from "./../components/validation"

const ChurchInfo = React.createClass({

  saveAndContinue: function(event) {
    event.preventDefault();

    // Get values via this.refs
    const data = {
      churchName: document.getElementById("churchName").value,
      shortName: document.getElementById("shortName").value,
    }

    if (data.churchName && data.shortName ) {
      this.props.saveValues(data)
      this.props.nextStep("/signup/step-4")
    }

  },

  goBack(event){
    event.preventDefault();

    // Get values via this.refs
    const data = {
      churchName: document.getElementById("churchName").value,
      shortName: document.getElementById("shortName").value,
    }

    if (data.churchName && data.shortName ) {
      this.props.saveValues(data)
    }
    
    this.props.previousStep("/signup/step-2");
  },

  render() {
    return (
      <div>
        <h3 className="text-center push-ends soft-double-top@lap-and-up">
          Church Information
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <Input
            name="Church Name"
            id="churchName"
            classes="soft-ends"
            defaultValue={this.props.fieldValues.churchName}
          />
          <Input
            name="Short Name"
            id="shortName"
            classes="soft-ends"
            defaultValue={this.props.fieldValues.shortName}
            validation={Validation.azureSubdomain}
            errorText="Your shortname may only contain lowercase letters, numbers and hypens can not be used at the beginning or end of your shortname."
            helpText="This is used to create your unique URL."
          />

          <div className="grid push-top">
            <div className="grid__item one-half">
              <Link to="/signup/step-2">
                <button className="btn--secondary one-whole" onClick={this.goBack}>Back</button>
              </Link>
            </div>
            <div className="grid__item one-half">
              <Link to="/signup/step-4">
                <button className="btn--filled one-whole" onClick={this.saveAndContinue}>
                  Next
                </button>
              </Link>
            </div>

          </div>
        </div>


      </div>
    );

  }

});

export default ChurchInfo
