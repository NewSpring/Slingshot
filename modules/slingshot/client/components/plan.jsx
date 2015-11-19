import React from "react";
import { Link } from 'react-router'


const Plan = React.createClass({


  saveData: function(event) {
    event.preventDefault();

    this.props.save(this.refs.plan.value)
  },

  render() {

    let outlinedClasses = [
      "soft",
      "background--light-secondary",
      "text-center"
    ];

    if (this.props.plan.featured) {
      outlinedClasses.push("outlined");
      outlinedClasses.push("soft-double-ends")
    }
    else {
      outlinedClasses.push("outlined--light-secondary");
      outlinedClasses.push("push-top");
    }

    const buttonClasses = this.props.plan.featured ? "btn--filled" : "btn--secondary";
    return (
      <div className="grid__item one-third@lap-and-up push-bottom">
        <div className={outlinedClasses.join(" ")}>
          <div className="soft-ends">
            <input ref="plan" type="hidden" value={this.props.plan.id}/>
            <img src={this.props.plan.image} height="100" className="push-bottom" />
            <h4 className="text-dark-tertiary">{this.props.plan.name}</h4>
            <h3 className="soft flush">${this.props.plan.price}/mo</h3>
            <p><small>{this.props.plan.people} people</small></p>
            <p><small>Server with {this.props.plan.ram} RAM</small></p>

            <button className={buttonClasses} onClick={this.saveData}>
              Select Plan
            </button>
          </div>
        </div>
      </div>
    );

  }

});

export default Plan
