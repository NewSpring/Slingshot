import React from "react";
import { Link } from 'react-router'

import StepsBar from "./../components/stepsbar";
import Input from "./../components/input";
import Validation from "./../components/validation"

const ChurchInfo = React.createClass({

  render() {
    return (
      <div>
        <h3 className="text-center push-ends soft-double-top@lap-and-up">
          Great Success
        </h3>
        <div className="soft@lap-and-up constrain-form">
          <p>
            Your account has been created and your first payment has been approved. Now it's time to get started with RockRMS!
          </p>
          <div className="text-center soft-ends">
            <a href={this.props.fieldValues.azureEmail} className="btn--filled">
              Set Up My Rock
            </a>
          </div>
        </div>



      </div>
    );

  }

});

export default ChurchInfo
