import React from "react";

import StepsBar from "./../components/stepsbar";
import Plan from "./../components/plan";


const PickPlan = React.createClass({

  plans: [
    {
      name: "Small Church",
      id: "Small",
      image: "//s3.amazonaws.com/uploads.hipchat.com/21097/1894791/hv1pPmozW3vKfFo/icon-plan_small.svg",
      featured: false,
      price: "74.99",
      people: "2 - 4,999",
      ram: "1.75GB"
    },
    {
      name: "Medium Church",
      id: "Medium",
      image: "//s3.amazonaws.com/uploads.hipchat.com/21097/1894791/1gAoANrrcNuyqFC/icon-plan_medium.svg",
      featured: true,
      price: "149.99",
      people: "5,000 - 9,999",
      ram: "3.5GB"
    },
    {
      name: "Large Church",
      id: "Large",
      image: "//s3.amazonaws.com/uploads.hipchat.com/21097/1894791/cgwTEXSWQV1Ybvc/icon-plan_large.svg",
      featured: false,
      price: "299.99",
      people: "10,000 - 100,000",
      ram: "7GB"
    }
  ],

  saveAndContinue: function(value) {

    // Get values via this.refs
    const data = {
      plan: value
    }

    this.props.saveValues(data)
    this.props.nextStep("/signup/step-2")
  },

  render() {


    return (
      <div>
        <h3 className="text-center push-ends soft-double-ends@lap-and-up">
          Pick Your Plan
        </h3>
        <div className="grid">
          {this.plans.map((plan, i) => {
            return <Plan plan={plan} key={i}  save={this.saveAndContinue}/>
          })}
        </div>
        <div className="soft-double">
          <p className="text-center text-dark-tertiary">
            Looking for a larger, multi-campus plan? <a href="#" className="text-dark-tertiary underline">Contact Us</a>
          </p>

        </div>
      </div>
    );

  }

});

export default PickPlan
