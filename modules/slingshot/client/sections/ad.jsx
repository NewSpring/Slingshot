import React from "react";

const Ad = React.createClass({

  createMarkup() {
    return { __html: this.props.content };
  },

  render() {
    return (
      <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
        <div className="soft soft-double-ends">
          <div>
            <h2 className="text-primary">{ this.props.title }</h2>
            <div dangerouslySetInnerHTML={ this.createMarkup() } className="soft" />
            <button className="btn--filled">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
});


export default Ad
