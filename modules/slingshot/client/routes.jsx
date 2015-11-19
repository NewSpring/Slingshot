import Global from "./global";

import Home from "./sections/home";


import Form from "./sections/form";

import Plans from "./fieldsets/plan";
import PersonalInfo from "./fieldsets/personal";
import ChurchInfo from "./fieldsets/church";
import BillingInfo from "./fieldsets/billing";

import Account from "./sections/accountviewer";
import Loading from "./sections/loading";
import SignIn from "./fieldsets/signin"
import Reset from "./fieldsets/reset"

const {IndexRoute, Route} = ReactRouter;

const AppRoutes = (
  <Route path="/" component={Global}>
    <IndexRoute component={Home} />
    <Route path="signup" component={Form}>
      <IndexRoute component={Plans}/>
      <Route path="step-1" component={Plans}/>
      <Route path="step-2" component={PersonalInfo} />
      <Route path="step-3" component={ChurchInfo} />
      <Route path="step-4" component={BillingInfo} />
      <Route path="loading" component={Loading} />
    </Route>
    <Route path="account" component={Account}>
      <IndexRoute component={SignIn}/>
      <Route path="reset" component={Reset}/>
    </Route>
  </Route>
)

export default AppRoutes
