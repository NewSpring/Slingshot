
import React from "react";

const Service = React.createClass({
  render() {

    const classes = `background--light-secondary icon--${this.props.service}`
    const center = {margin: "0 auto"}
    return (
      <div className="grid__item one-quarter" style={center}>
        <span className={classes}>
        </span>
      </div>
    )
  }
})

const LinkBlock = React.createClass({
  render() {

    return (
      <div className="push-double-bottom">
        <h3 className="text-primary push-half-bottom">{this.props.title}</h3>

        <ul className="">
        {this.props.links.map((link, i) => {
          const inlineStyles = {
            textDecoration: "none",
            lineHeight: 1.45
          }
          return (
            <li className="flush-bottom" key={i}>
              <a className="text-light-secondary" style={inlineStyles} href={link.link}>{link.title}</a>
            </li>
          )
        })}
        </ul>
      </div>
    )

  }
})


const Footer = React.createClass({

  services: [
    "facebook",
    "twitter",
    "google",
    "rss"
  ],

  links: [
    {
      title: "About Rock",
      links: [
        {title: "Features", link: "https://www.rockrms.com/features"},
        {title: "Our Story", link: "https://www.rockrms.com//OurStory"},
        {title: "Roadmap", link: "https://trello.com/b/C8gulcfu/roadmap"},
        {title: "Who's Using Rock", link: "https://www.rockrms.com/organizations"},
        {title: "Support / Consulting Options", link: "https://www.rockrms.com/CommunityPartners"},
        {title: "Privacy", link: "https://www.rockrms.com/Privacy"}
      ]
    },

    {
      title: "Learning Rock",
      links: [
        {title: "Documentation", link: "https://www.rockrms.com/Learn/Documentation"},
        {title: "Videos", link: "https://www.rockrms.com/Learn/Videos"},
        {title: "Developer Tools", link: "https://www.rockrms.com/Developer"},
        {title: "Lava", link: "https://www.rockrms.com/Lava"}
      ]
    },

    {
      title: "Community",
      links: [
        {title: "Ask Questions", link: "https://www.rockrms.com/Ask"},
        {title: "Blog", link: "https://www.rockrms.com/Rock/Connect"},
        {title: "Bugs/Issues", link: "https://github.com/SparkDevNetwork/Rock/issues?q=is%3Aopen"},
        {title: "Submit Ideas", link: "https://www.rockrms.com/Rock/Ideas"},
        {title: "Slack Community", link: "https://www.rockrms.com/slack"},
      ]
    }
  ],


  render() {

    return (
      <section className="background--dark-primary soft-double-ends">
        <div className="constrain-page">
          <div className="grid soft-double-top">
            {this.links.map(function(link, i){

              return (
                <div className="grid__item one-whole text-center@lap-and-up one-third@lap-and-up" key={i}>
                  <LinkBlock title={link.title} links={link.links}/>
                </div>
              )
            })}


            </div>

          <div className="grid text-center">
            <div className="grid__item one-whole one-third@lap-and-up">
              <button className="btn--filled push-double-bottom">
                Subscribe To Our Newsletter
              </button>

              <div className="soft-sides">
                <div className="grid text-center hard-sides push-bottom">
                  {this.services.map(function(service, i){
                    return (
                      <Service service={service}  key={i}/>
                    )

                  })}

                </div>
              </div>

              <div className="soft text-center">
                <p className="text-light-secondary">
                  <small>
                    Rock is a project of the Spark Development Network
                  </small>
                </p>
              </div>
              </div>
          </div>
        </div>
      </section>
    );

  }



})

export default Footer
