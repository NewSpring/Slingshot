import { Component } from "react";

import SlingPic from "./slingpic.jsx";

export default class Title extends Component {

  slingshots = [
    "http://vignette2.wikia.nocookie.net/zelda/images/1/1e/Slingshot_(Twilight_Princess).png/revision/latest?cb=20090404003841",
    "http://img.dxcdn.com/productimages/sku_176547_1.jpg",
    "http://s5.thisnext.com/media/largest_dimension/028B8DB0.jpg"
  ]

  render() {

    return (
      <div className="text-center soft-double-top">
        <h3>Slingshot</h3>

        {this.slingshots.map(function(image, i) {
          return <SlingPic image={image} key={i} />
        })}
      </div>
    );

  }

}
