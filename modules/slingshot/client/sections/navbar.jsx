
import React from "react";
import Logo from "./../components/logo"

const NavBar = React.createClass({
  render() {

    return (
      <div className="section nav-bar background--dark-primary hard">
        <div className="grid one-whole">
          <div className="grid__item one-third@handheld one-sixth@lap-and-up text-left">
            <Logo/>
          </div>
          <div className="grid__item push-half-top floating locked-right">
            <h6 className="float-right soft-half-right">
              <ul className="">
                <li className="float-left soft-half-sides"><a href="#">Features</a></li>
                <li className="float-left soft-half-sides"><a href="#">Demo</a></li>
                <li className="float-left soft-half-sides"><a href="#">Learn</a></li>
                <li className="float-left soft-half-sides"><a href="#">Ask</a></li>
                <li className="float-left soft-half-sides"><a href="#">Connect</a></li>
                <li className="float-left soft-half-sides"><a href="#">Donate</a></li>
                <li className="float-left soft-half-sides"><a href="#" className="btn--filled">Get Started</a></li>
                <li className="float-left soft-half-sides"><a href="#" className="btn--secondary">Sign In</a></li>
              </ul>
            </h6>
          </div>
        </div>
      </div>
    );

  }

})

export default NavBar
