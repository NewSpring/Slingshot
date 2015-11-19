

import Global from "./../../modules/slingshot/client/global";
import Home from "./../../modules/slingshot/client/home";
import SignUp from "./../../modules/slingshot/client/signup";
import Form from "./../../modules/slingshot/client/sections/form";
import PickPlan from "./../../modules/slingshot/client/pickPlan";
import PersonalInfo from "./../../modules/slingshot/client/personalInfo";
import ChurchInfo from "./../../modules/slingshot/client/churchInfo";
import BillingInfo from "./../../modules/slingshot/client/billingInfo";
import Success from "./../../modules/slingshot/client/success";


const {IndexRoute, Route} = ReactRouter;

const AppRoutes = (
  <Route path="/" component={Global}>
    <IndexRoute component={Home} />
    <Route path="signup/step-1" component={PickPlan} />
    <Route path="signup/step-2" component={PersonalInfo} />
    <Route path="signup/step-3" component={ChurchInfo} />
    <Route path="signup/step-4" component={BillingInfo} />
    <Route path="signup/success" component={Success} />

  </Route>
);

ReactRouterSSR.Run(AppRoutes, {
  props: {
    onUpdate() {
      // Notify the page has been changed to Google Analytics
      // ga('send', 'pageview');
    }
  },
  history: new ReactRouter.history.createHistory()
}, {
  preRender: function(req, res) {
    ReactCookie.plugToRequest(req, res);
  }
});

// if (Meteor.isClient) {
//   // Load Google Analytics
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//   ga('create', 'UA-XXXXXXXX-X', 'auto');
//   ga('send', 'pageview');
// }
