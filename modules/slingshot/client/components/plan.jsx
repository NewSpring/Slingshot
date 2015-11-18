import React from "react";

const Plan = React.createClass({

  render() {

    let outlinedClasses = ["soft", "background--light-secondary", "text-center"];

    if (this.props.plan.featured) {
      outlinedClasses.push("outlined");
    }
    else {
      outlinedClasses.push("outlined--light-secondary");
    }

    const buttonClasses = this.props.plan.featured ? "btn" : "btn--secondary";

    return (
      <div className="grid__item one-third">
        <div className={outlinedClasses.join(" ")}>
          <img src={this.props.plan.image} height="100" className="push-bottom" />
          <h4 className="text-dark-tertiary">{this.props.plan.name}</h4>
          <h3 className="soft flush">${this.props.plan.price}/mo</h3>
          <p><small>{this.props.plan.people} people</small></p>
          <p><small>Server with {this.props.plan.ram} RAM</small></p>
          <a href="#" className={buttonClasses}>Select Plan</a>
        </div>
      </div>
    );

  }

});

export default Plan
