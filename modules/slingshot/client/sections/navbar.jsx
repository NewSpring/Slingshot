
import React from "react";
import Logo from "./../components/logo"

const Link = React.createClass({
  render() {

    const btnClass = `btn--${this.props.btn}`
    const linkClasses = `text-light-secondary h6 btn--${this.props.link.btn}`

    return (
      <div className="display-inline-block soft-sides">
        <a href={this.props.link.link} className={linkClasses}><strong>{this.props.link.title}</strong></a>
      </div>
    )
  }
})

const NavBar = React.createClass({

  links: [
    {
      title: "Features",
      link: "http://www.rockrms.com/Rock/Features",
    },{
      title: "Demo",
      link: "http://rock.rocksolidchurchdemo.com/page/3?returnurl=%252f",
    },{
      title: "Learn",
      link: "http://www.rockrms.com/Learn",
    },{
      title: "Ask",
      link: "http://www.rockrms.com/Rock/Ask",
    },{
      title: "Connect",
      link: "http://www.rockrms.com/Rock/Connect",
    },{
      title: "Donate",
      link: "http://www.rockrms.com/Rock/Invest",
    },{
      title: "Get Started",
      btn: "filled",
      link: "/signup",
    },{
      title: "Sign In",
      btn: "tertiary",
      link: "/account",
    },
  ],

  render() {

    const align = {
      verticalAlign: "middle"
    }

    return (
      <div className="section nav-bar background--dark-primary hard">
        <div className="grid one-whole">
          <div className="grid__item one-third@handheld one-sixth@lap-and-up text-left" style={align}>
            <Logo/>
          </div>
          <div className="grid__item five-sixths@lap-and-up visuallyhidden@handheld text-right" style={align}>
            <div className="display-inline-block">
              {this.links.map(function(link, i){
                return (
                  <Link link={link} btn={link.btn} key={i}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );

  }

})

export default NavBar
