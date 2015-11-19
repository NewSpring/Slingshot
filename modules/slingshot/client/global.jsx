import { Component, PropTypes } from "react";

import Nav from "./sections/navbar";
import Footer from "./sections/footer";

export default class Global extends Component {

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}