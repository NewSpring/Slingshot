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

    let buttonClasses = this.props.plan.featured ? "btn--filled" : "btn--secondary";
    buttonClasses += " push-half-top";


    return (
      <div className="grid__item one-third@lap-and-up push-bottom">
        <div className={outlinedClasses.join(" ")}>
          <div className="soft-ends">

            {(() => {
              if (this.props.plan.featured) {
                return (
                  <div className="triangle">MOST POPULAR</div>
                )
              }

            })()}

            <input ref="plan" type="hidden" value={this.props.plan.id}/>
            <img src={this.props.plan.image} height="100" className="push-bottom" />
            <h4 className="text-dark-tertiary">{this.props.plan.name}</h4>
            <div className="grid flush">
              <div className="display-inline-block flush soft-left" style={ {position: "relative" }}>
                <h2>{this.props.plan.price}</h2>
                <span className="locked-top locked-left"><h4>$</h4></span>
              </div>
              <h6 className="display-inline-block">/mo</h6>
            </div>
              <p className="push-half-bottom"><small>{this.props.plan.people} people</small></p>
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
