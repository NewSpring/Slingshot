

import React from "react";
import { Link } from 'react-router'


const Hero = React.createClass({

  styles: {
    backgroundImage: "url('//www.rockrms.com/Themes/RockRMSv2/Assets/Images/Homepage/section-mobile-background.jpg')"
  },

  render() {

    return (
      <Link to="/account">
        <section className="background--fill hard overlay--solid-dark-secondary" style={this.styles}>
          <div className="constrain-page overlay__item">
            <div className="ratio--square@handheld ratio--landscape@lap-and-up">

              <div className="ratio__item floating--left one-whole">
                <div className="floating__item soft one-half@lap-and-up">

                    <h1 className="text-light-primary hard">
                      View Your Plan
                    </h1>
                    <p className="text-light-primary">
                      If you already have an account with us, click here to view your plan.
                    </p>

                    <button className="btn--filled">My Account</button>

                </div>

              </div>

            </div>
          </div>
        </section>
      </Link>
    );

  }

})
export default Hero
