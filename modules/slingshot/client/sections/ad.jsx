
import { Component } from "react";
import Pastors from "./../components/pastors"
import Devs from "./../components/devs"

export default class Ad extends Component {

  render() {

    return (
      <section className="hard">
        <div className="grid flush one-whole">
          <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
            <div className="soft soft-double-ends">
              <Pastors />
            </div>
          </div>
          <div className="grid__item hard one-whole visuallyhidden@lap-and-up">
            <div className="soft-sides">
              <hr className="one-whole flush-ends"></hr>
            </div>
          </div>
          <div className="grid__item hard one-whole@handheld one-half@lap-and-up">
            <div className="soft soft-double-ends">
              <Devs />
            </div>
          </div>
        </div>

      </section>
    );

  }

}
