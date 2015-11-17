
import { Component } from "react";


export default class Footer extends Component {

  services = [
    "facebook",
    "twitter",
    "google-plus",
    "rss"
  ];

  renderServices(){
    for (let service of this.services) {
      console.log(service)
      const classes = `icon background--light-tertiary fa fa-${service}`
      return (
        <div className="grid__item one-quarter@handheld">
          <span className={classes}>
          </span>
        </div>
      )
    }
  }

  render() {

    return (
      <section className="background--dark-primary">


        <button className="btn--filled push-double-bottom">
          Subscribe To Our Newsletter
        </button>


        <div className="grid push-bottom">
          {this.services.map(function(service, i){

            const classes = `icon background--light-tertiary fa fa-${service}`

            return (
              <div className="grid__item one-quarter@handheld" key={i}>
                <span className={classes}>
                </span>
              </div>
            )

          })}

        </div>

        <div className="soft text-center">
          <p className="text-light-primary">
            <small>
              Rock is a project of the Spark Development Network
            </small>
          </p>
        </div>

      </section>
    );

  }

}
