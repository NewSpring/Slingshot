import React from "react";
import { Link } from "react-router";

const Logo = React.createClass({

  render() {

    return (
      <div className="soft-half soft@lap-and-up">
        <Link to='/'>
        	<img src="https://www.rockrms.com//Themes/RockExternal/Assets/Images/rock-logo.svg"/>
        </Link>
      </div>
    );

  }
});


export default Logo
