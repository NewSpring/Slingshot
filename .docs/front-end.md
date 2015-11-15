# Front End

Already included:

- [Junction CSS Framework](https://github.com/newspring/junction-framework)
- [Font Awesome 4.3.0](https://fortawesome.github.io/Font-Awesome/)

_You will probably want to install the [React Developer Tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)._

## Overview

Most of the front end development will be done in this folder:

~~~
modules/slingshot/client
~~~

This project uses [ES6 Classes](https://facebook.github.io/react/docs/reusable-components.html#es6-classes) to extend the React Component class. The `home.jsx` component (located in `modules/slingshot/client/home.jsx`) is an example of how to use this syntax.

The `home.jsx` file will be where everything is gathered to create the Home Page. It is a good idea to modularize all of the different elements of the page, so they can be easily maintained. Included initially is an example of how to do this using the `Title` component and the `Logo` component.

First, `Title` and `Logo` are imported from the components folder:

~~~javascript
import Title from "./components/title";
import Logo from "./components/logo";
~~~

*Note: these must be capital letter class names in React*

Then, they can be returned from the `render()` function to be rendered on the page:

~~~javascript
render() {
  return (
    <div>
      <Title />
      <Logo />
    </div>
  );
}
~~~

Notes:

- Child elements in the render markup must be contained in a parent element, which is why there is the `<div></div>`
- Classes must use capital letters in React in order to be rendered properly: `Logo` and `<Logo />` instead of `logo` and `<logo />`

## Inline Styles

Inline styles may be passed as a javascript object to the style attribute. This follows the same camelCased pattern as accessing them from the DOM using javascript. [More info](https://facebook.github.io/react/tips/inline-styles.html). There is an example of this in the `Logo` component.

~~~javascript
tempStyles = {
  width: "100px",
  height: "100px",
  backgroundImage: "//somepic.com/pic.jpg"
}
~~~

## Component Properties / Iterating

You can also pass information in to a component. It can then be accessed inside the component using the `this.props` object. This is especially useful when iterating over a list of items to be rendered using the same component. An example of this is included in the `Title` component to render out some `SlingPic`s.

Then, import the `SlingPic` component:

~~~javascript
import SlingPic from "./slingpic.jsx";
~~~

Then, set up your array of slingshot pictures:

~~~javascript
slingshots = [
  "http://vignette2.wikia.nocookie.net/zelda/images/1/1e/Slingshot_(Twilight_Princess).png/revision/latest?cb=20090404003841",
  "http://img.dxcdn.com/productimages/sku_176547_1.jpg",
  "http://s5.thisnext.com/media/largest_dimension/028B8DB0.jpg"
]
~~~

Next, iterate over your slingshots, and render out a `SlingPic` for each one:

~~~javascript
{this.slingshots.map(function(image, i) {
  return <SlingPic image={image} key={i} />
})}
~~~

Finally, inside `SlingPic` you can render out the image using `this.props`:

~~~javascript
render() {
  return (
    <img src={this.props.image} />
  );
}
~~~

## Routes

Routes are handled in `modules/slingshot/client/routes.jsx`. For the home page, just include the `Home` component, and then include it as the `indexRoute`:

~~~javascript
import Home from "./home";


export default {
  path: "/",
  component: Home,
  indexRoute: { component: Home }
};
~~~

If you wanted to include additional pages, just import them and add then as `childRoutes`:

~~~javascript
import Home from "./home";
import About from "./about";
import Contact from "./contact";


export default {
  path: "/",
  component: Home,
  indexRoute: { component: Home },
  childRoutes: [
    { path: "/about", component: About },
    { path: "/contact", component: Contact }
  ]
};
~~~
