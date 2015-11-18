
import React from "react";


const Hero = React.createClass({

  styles: {
    backgroundImage: "url('//s3.amazonaws.com/uploads.hipchat.com/21097/1894791/Ax54AePPjQbqHzw/hero-img.png')"
  },


  render() {

    return (
      <section className="hero background--fill hard" style={this.styles}>
        <div className="ratio--square@handheld ratio--landscape@lap-and-up">

          <div className="ratio__item floating one-whole">
            <div className="one-half@lap-and-up three-quarters@handheld floating__item">
              <h1 className="text-light-primary soft-double-bottom push-double-bottom">
                Take Better Care Of Your Community
              </h1>
            </div>
          </div>

        </div>

      </section>
    );

  }

})
export default Hero
