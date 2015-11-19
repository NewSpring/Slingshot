import React from "react";
import { Link } from 'react-router'

import StepsBar from "./../components/stepsbar";
import Input from "./../components/input";
import LiveFormatting from "./../components/formatting";
import Validation from "./../components/validation";

const ChurchInfo = React.createClass({


  saveAndContinue: function(event) {
    event.preventDefault();

    // Get values via this.refs
    const data = {
      cardNumber: document.getElementById("cardNumber").value,
      expiration: document.getElementById("expiration").value,
      ccv: document.getElementById("ccv").value,
    }

    if (Validation.creditCard(data.cardNumber) &&
      Validation.creditExpiry(data.expiration) &&
      Validation.creditCVV(data.ccv)) {
      this.props.saveValues(data);
      this.props.submitRegistration();
    }

  },

  goBack(event){

    event.preventDefault();

    // Get values via this.refs
    const data = {
      cardNumber: document.getElementById("cardNumber").value,
      expiration: document.getElementById("expiration").value,
      ccv: document.getElementById("ccv").value,
    }

    if (Validation.creditCard(data.cardNumber) &&
      Validation.creditExpiry(data.expiration) &&
      Validation.creditCVV(data.ccv)) {
      this.props.saveValues(data);
    }
    this.props.previousStep("/signup/step-3");
  },


  render() {
    return (
      <div>
        <h3 className="text-center push-ends soft-double-top@lap-and-up">
          Billing Information
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <Input
            name="Card Number"
            id="cardNumber"
            classes="soft-ends"
            defaultValue={this.props.fieldValues.cardNumber}
            liveFormatting={LiveFormatting.creditCard}
            validation={Validation.creditCard}
            errorText="Please enter a valid credit card number."
          />
          <div className="grid">
            <div className="grid__item one-half">
              <Input
                name="Expiration"
                id="expiration"
                classes="soft-ends"
                defaultValue={this.props.fieldValues.expiration}
                validation={Validation.creditExpiry}
                errorText="Please enter a valid expiration date."
              />
            </div>
            <div className="grid__item one-half">
              <Input
                name="CCV"
                id="ccv"
                classes="soft-ends"
                defaultValue={this.props.fieldValues.ccv}
                validation={Validation.creditCVV}
                errorText="Please enter a valid credit card verification number."
              />
            </div>
          </div>


          <div className="grid push-top">
            <div className="grid__item one-half">
              <Link to="/signup/step-3">
                <button className="btn--secondary one-whole" onClick={this.goBack}>Back</button>
              </Link>
            </div>
            <div className="grid__item one-half">
              <Link to="/signup/loading">
                <button className="btn--filled one-whole" onClick={this.saveAndContinue}>
                  Submit
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
