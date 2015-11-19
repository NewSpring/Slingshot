import React from "react";
import ProgressBar from "../components/progressBar"

const Loading = React.createClass({

  getUrl () {
    // TODO: Hook up
    let subdomain = "something";
    return `https://${subdomain}.rockrms.church`;
  },

  getValue () {
    // TODO: Hook up
    return 30;
  },

  isDone () {
    return this.getValue() === 100;
  },

  getTitle () {
    if(this.isDone()) {
      return "Great Success!"
    }

    return "Almost There!";
  },

  getText () {
    if(this.isDone()) {
      return (
        <span>
          Your account has been created and your first payment has been
          approved. Now it's time to get started with Rock RMS!
        </span>
      );
    }

    return (
      <span>
        We're getting everything ready for you. This should take no more than
        a few minutes. If you'd like, you can close this window and we'll send
        you an email when it is done.
      </span>
    );
  },

  getProgressOrButton () {
    if(this.isDone()) {
      return (
        <a href={ this.getUrl() }>
          <button className="btn--filled one-whole@handheld push-ends">
            Set Up My Rock
          </button>
        </a>
      );
    }

    return ( <ProgressBar value={ this.getValue() } /> );
  },

  render() {
    return (
      <div className="grid text-center">
        <div className="grid__item one-whole one-third@lap-and-up">
          <div className="soft">
            <h2 className="text-dark-primary">{ this.getTitle() }</h2>
            <p className="center-text">{ this.getText() }</p>
            <div className="soft-bottom">
              { this.getProgressOrButton() }
            </div>
          </div>
        </div>
      </div>
    );
  }
})


export default Loading
