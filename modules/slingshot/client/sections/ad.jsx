import React from "react";
import { Link } from 'react-router'

const Ad = React.createClass({

  renderButton() {
    if(!this.props.link) {
      return;
    }

    const isAbsolute = this.props.link.indexOf("http") === 0;

    let classes = [
    "one-whole@handheld", "push-ends"
    ]

    if (this.props.isPrimary) {
      classes.push("btn--filled")
    } else {
      classes.push("btn--secondary")
    }

    if(isAbsolute) {
      return (
        <a href={ this.props.link }>
          <button className={classes.join(" ")}>
            { this.props.linkText }
          </button>
        </a>
      );
    }

    
    return (
      <Link to={ this.props.link }>
        <button className={classes.join(" ")}>
          { this.props.linkText }
        </button>
      </Link>
    );
  },

  render() {
    let classNames = [ "text-center@handheld" ];

    if(this.props.isPrimary) {
      classNames.push("text-primary");
    }

    return (
      <div className="grid__item one-whole@handheld one-half@lap-and-up">
        <div className="soft-double-ends">
          <div className="">
            <h2 className={ classNames.join(" ") }>
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
            { this.renderButton() }
          </div>
        </div>
      </div>
    );
  }
});


export default Ad
