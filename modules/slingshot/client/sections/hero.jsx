
import { Component } from "react";


export default class Hero extends Component {

  styles = {
    backgroundImage: "url('https://www.rockrms.com/Themes/RockRMSv2/Assets/Images/Homepage/section-hosting-background.jpg')"
  }

  render() {

    return (
      <section className="background--fill hard" style={this.styles}>
        <div className="ratio--square@handheld ratio--landscape@lap-and-up">

          <div className="ratio__item floating--bottom one-whole">
            <div className="floating__item">
              <h1 className="text-light-primary soft-bottom">
                Take Better Care Of Your Community
              </h1>
            </div>
          </div>

        </div>

      </section>
    );

  }

}
