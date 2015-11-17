
import { Component } from "react";
import Pastors from "./../components/pastors"
import Devs from "./../components/devs"

export default class Ad extends Component {

  render() {

    return (
      <section>
        <div className="grid one-whole">
          <div className="grid__item one-half@one-whole one-half@lap-and-up">
            <div className="soft-ends">
              <Pastors />
            </div>
          </div>
          <div className="grid__item one-half@one-whole one-half@lap-and-up">
            <div className="soft-ends">
              <Devs />
            </div>
          </div>
        </div>

      </section>
    );

  }

}
