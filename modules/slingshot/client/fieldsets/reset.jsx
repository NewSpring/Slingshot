import React from "react";
import { Link } from 'react-router'

import Validation from "./../components/validation"
import Input from "../components/input"

const Reset = React.createClass({

  render() {
    return (
      <div>
        <h3 className="text-center push-ends">
          Reset Password
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <p>
            If you have lost your password, enter you password and click the link below to get a new one sent to your email!
          </p>

          <Input
            name="Email Address"
            id="email"
            classes="soft-ends"
            validation={Validation.email}
          />

          <div className="text-center soft-ends">
            <button type="submit" className="btn--filled">
              Reset Password
            </button>
          </div>
        </div>



      </div>
    );

  }

});

export default Reset
