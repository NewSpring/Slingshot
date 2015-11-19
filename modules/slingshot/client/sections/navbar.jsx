
import React from "react";
import Logo from "./../components/logo"

const NavBar = React.createClass({

  render() {

    const align = {
      verticalAlign: "middle"
    }

    return (
      <div className="section nav-bar background--dark-primary hard">
        <div className="grid one-whole">
          <div className="grid__item one-third@handheld one-sixth@lap-and-up text-left" style={align}>
            <Logo/>
          </div>
          <div className="grid__item five-sixths@lap-and-up visuallyhidden@handheld text-right" style={align}>
            <div className="display-inline-block">
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary h6"><strong>Features</strong></a>
              </div>
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary"><strong>Demo</strong></a>
              </div>
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary"><strong>Learn</strong></a>
              </div>
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary"><strong>Ask</strong></a>
              </div>
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary"><strong>Connect</strong></a>
              </div>
              <div className="display-inline-block soft-sides">
                <a href="#" className="text-light-secondary"><strong>Donate</strong></a>
              </div>
              <div className="display-inline-block soft-half-sides">
                <button href="/signup" className="btn--filled">Get Started</button>
              </div>
              <div className="display-inline-block soft-half-sides">
                <button href="/account" className="btn--secondary">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

})

export default NavBar
