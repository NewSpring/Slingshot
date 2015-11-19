
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
                <h5>
                  <a href="#" className="text-light-secondary">Features</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <h5>
                  <a href="#" className="text-light-secondary">Demo</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <h5>
                  <a href="#" className="text-light-secondary">Learn</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <h5>
                  <a href="#" className="text-light-secondary">Ask</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <h5>
                  <a href="#" className="text-light-secondary">Connect</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <h5>
                  <a href="#" className="text-light-secondary">Donate</a>
                </h5>
              </div>
              <div className="display-inline-block soft-sides">
                <button href="#" className="btn--filled">Get Started</button>
              </div>
              <div className="display-inline-block soft-sides">
                <button href="#" className="btn--secondary">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }

})

export default NavBar
