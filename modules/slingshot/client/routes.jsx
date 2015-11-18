import Global from "./global";
import Home from "./home";
import SignUp from "./signup"


export default {
  path: "/",
  component: Global,
  indexRoute: { component: Home },
  childRoutes: [
    { path: "/signup", component: SignUp }
  ]
};