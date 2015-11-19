import React from "react";
import { Link } from 'react-router'

const Ad = React.createClass({

  render() {
    return (
      <div className="grid__item one-whole@handheld one-half@lap-and-up">
        <div className="soft-double-ends soft-double-sides@lap-and-up">
          <div className="push-double-sides@lap-and-up">
            <h2 className="text-primary text-center@handheld">
              { this.props.title }
            </h2>
            <h4>
              { this.props.subTitle }
            </h4>
            <ul>
              { this.props.points.map(function (point, index) {
                return (
                  <li key={index}>{ point }</li>
                );
              }) }
            </ul>
            <Link to={ this.props.link }>
              <button className="btn--filled one-whole@handheld push-ends">
                { this.props.linkText }
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
});


export default Ad
