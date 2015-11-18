import React from "react";

import Plan from "./components/plan";

const PickPlan = React.createClass({

  render() {

    const plans = [
      {
        name: "Small Church",
        image: "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/church.png",
        featured: false,
        price: "74.99",
        people: "2 - 4,999",
        ram: "1.75GB"
      },
      {
        name: "Medium Church",
        image: "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/church.png",
        featured: true,
        price: "149.99",
        people: "5,000 - 9,999",
        ram: "3.5GB"
      },
      {
        name: "Large Church",
        image: "https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/church.png",
        featured: false,
        price: "299.99",
        people: "10,000 - 100,000",
        ram: "7GB"
      }
    ]

    return (
      <section>
        <h3 className="text-center push-double-top">Pick Your Plan</h3>
        <div className="grid">
          {plans.map(function(plan, i) {
            return <Plan plan={plan} key={i} />
          })}
        </div>
        <p className="text-center push-double">Looking for a larger, multi-campus plan? <a href="#">Contact Us</a></p>
      </section>
    );

  }

});

export default PickPlan
