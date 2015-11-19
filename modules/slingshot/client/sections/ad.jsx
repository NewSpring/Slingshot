import React from "react";

const Ad = React.createClass({

  render() {
    return (
      <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
        <div className="soft soft-double-ends">
          <div>
            <h2 className="text-primary">{ this.props.title }</h2>
            <h4>{ this.props.subTitle }</h4>
            <div className="soft">
              <ul>
                { this.props.points.map(function (p, index) {
                  return (
                    <li key={index}>{ p }</li>
                  );
                }) }
              </ul>
            </div>
            <button className="btn--filled">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
});


export default Ad
