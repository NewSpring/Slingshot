
import React from "react";


const Hero = React.createClass({

  styles: {
    backgroundImage: "url('//s3.amazonaws.com/uploads.hipchat.com/21097/1894791/Ax54AePPjQbqHzw/hero-img.png')"
  },


  render() {

    return (
      <section className="background--fill hard overlay--solid-dark-secondary" style={this.styles}>
        <div className="constrain-page overlay__item">
          <div className="ratio--square@handheld ratio--landscape@lap-and-up">

            <div className="ratio__item floating--bottom one-whole">
              <div className="floating__item soft-double-bottom one-half@lap-and-up">
                <h1 className="text-light-primary soft-double-bottom">
                  Take Better Care Of Your Community
                </h1>
              </div>

            </div>

          </div>
          </div>
      </section>
    );

  }

})
export default Hero
