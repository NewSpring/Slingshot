
import React from "react";
import { Link } from 'react-router'

import StepsBar from "./../components/stepsbar";
import Input from "./../components/input";
import Validation from "./../components/validation"

const SignIn = React.createClass({

  saveAndContinue: function(event) {
    event.preventDefault();

    // Get values via this.refs
    const data = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }

    if (data.password && Validation.email(data.email)) {
      this.props.saveValues(data)
      this.props.signin();
    }

  },

  render() {
    return (
      <div>
        <h3 className="text-center push-ends">
          Sign In
        </h3>
        <div className="soft@lap-and-up constrain-form">

          <Input
            name="Email Address"
            id="email"
            classes="soft-ends"
            validation={Validation.email}
          />

          <Input
            name="Password"
            id="password"
            type="password"
            classes="soft-ends"
          />

          <p className="text-center text-dark-tertiary">
            Forgot your passord? <Link to="/account/reset/" className="text-dark-tertiary underline">Click Here</Link>
          </p>

          <button className="btn--filled one-whole push-top" onClick={this.signin}>
            Sign In
          </button>
        </div>


      </div>
    );

  }

});

export default SignIn
