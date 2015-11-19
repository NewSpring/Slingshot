import React from "react";
import { Link } from 'react-router'


import Input from "../components/input"
import Validation from "../components/validation"
import StepsBar from"../components/stepsbar"
// import BillingInformation from "../fieldsets/billing"

let fieldValues = {
  authorized: false,
  email: null,
  password: null
}

const Form = React.createClass({

  getInitialState: function() {
    return {
      authorized: false
    }
  },

  saveValues: function(fields) {
    return function() {
      // Remember, `fieldValues` is set at the top of this file, we are simply appending
      // to and overriding keys in `fieldValues` with the `fields` with Object.assign
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      fieldValues = Object.assign({}, fieldValues, fields)
    }()
  },

  signin: function() {
    event.preventDefault();


  },

  render() {
    const { pathname } = this.props.location
    return (
      <section className="constrain-page soft-double-ends@lap-and-up">

          <form>
          {this.props.children && React.cloneElement(this.props.children, {
            saveValues: this.saveValues,
            signin: this.signin
          })}

          </form>

      </section>
    );

  }

})
export default Form
