
import React from "react";
import Logo from "./../components/logo"

const NavBar = React.createClass({
  render() {

    return (
      <div className="section background--dark-primary hard">
        <div className="constrain-page">
          <div className="grid one-whole">
            <div className="grid__item one-half@handheld one-fifth@lap-and-up text-left">
              <Logo/>
            </div>
          </div>
        </div>
      </div>
    );

  }

})

export default NavBar
