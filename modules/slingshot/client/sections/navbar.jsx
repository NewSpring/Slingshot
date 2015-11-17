
import { Component } from "react";

import Logo from "./../components/logo"

export default class NavBar extends Component {

  render() {

    return (
      <div className="section background--dark-primary hard">
        <div className="grid one-whole">
          <div className="grid__item one-half@handheld one-fifth@lap-and-up text-left">
            <Logo/>
          </div>
        </div>

      </div>
    );

  }

}
