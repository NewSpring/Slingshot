import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Input from "../components/input"
import Validation from "../components/validation"
import StepsBar from"../components/stepsbar"
// import BillingInformation from "../fieldsets/billing"


let fieldValues = {
  plan: null,
  firstName: null,
  lastName: null,
  email: null,
  churchName: null,
  shortName: null,
  cardNumber: null,
  expiration: null,
  ccv: null
}


const Form = React.createClass({

  getInitialState: function() {
    return {
      step: 1
    }
  },

  saveValues: function(fields) {
    return function() {
      // Remember, `fieldValues` is set at the top of this file, we are simply appending
      // to and overriding keys in `fieldValues` with the `fields` with Object.assign
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      fieldValues = Object.assign({}, fieldValues, fields)
      Session.set("stored-values", fieldValues);
    }()
  },

  nextStep: function(link) {

    this.setState({
      step : this.state.step + 1
    })
    // console.log(this.props.history, link)
    // this.props.history.go(link)
    this.props.history.pushState(null, link)
  },

  componentDidMount() {

    const values = Session.get("stored-values");

    if (!values) {
      this.props.history.replaceState(null, "/signup")
    }

    // please forgive me
    const form = ReactDOM.findDOMNode(this);
    const rect = form.getBoundingClientRect();
    window.scrollTo(0, rect.top);


  },

  componentWillReceiveProps() {

    // please forgive me
    const form = ReactDOM.findDOMNode(this);
    const rect = form.getBoundingClientRect();
    window.scrollTo(0, rect.top);
  },

  // Same as nextStep, but decrementing
  previousStep: function(link) {


    this.setState({
      step : this.state.step - 1
    })

    this.props.history.pushState(null, link)
  },



  submitRegistration: function() {

    const exp = fieldValues.expiration;

    const month = exp.split("/")[0];
    const year = exp.split("/")[1];

    // for some reason after the stripe method returns,
    // field values is empty?!
    // save it here for storage
    const savedValues = fieldValues;

    console.log("starting setup...");
    Stripe.card.createToken({
      number: fieldValues.cardNumber,
      cvc: fieldValues.ccv,
      exp_month: month,
      exp_year: year,
      name: `${fieldValues.firstName} ${fieldValues.lastName}`
    }, function(status, response) {
      let token = response.id;

      Meteor.call("purchasePlan", {
        firstName: savedValues.firstName,
        lastName: savedValues.lastName,
        email: savedValues.email,
        subdomain: savedValues.shortName,
        orgName: savedValues.churchName
      }, token, savedValues.plan, function(err, response){

        // move this down to after err later
        // this.nextStep("/signup/success");

        if (err) { console.error(err); return; }
        console.table(response);
        this.props.history.pushState(null, "/signup/success");
        fieldValues = savedValues;


      });

    });


  },

  render() {
    const { pathname } = this.props.location
    return (
      <section className="constrain-page soft-double-ends@lap-and-up">
        <div className="grid push-double-top">
          <div className="grid__item text-center">
            <StepsBar steps={4} active={this.state.step} />
          </div>
        </div>

          <form>
          <ReactCSSTransitionGroup
            transitionName="swap"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
              {this.props.children && React.cloneElement(this.props.children, {
                saveValues: this.saveValues,
                fieldValues: fieldValues,
                previousStep: this.previousStep,
                nextStep: this.nextStep,
                submitRegistration: this.submitRegistration,
                key: pathname
              })}
          </ReactCSSTransitionGroup>
          </form>

      </section>
    );

  }

})
export default Form
