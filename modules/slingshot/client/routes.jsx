import Global from "./global";
import Home from "./home";
import SignUp from "./signup";
import Form from "./sections/form";
import PickPlan from "./pickPlan";


export default {
  path: "/",
  component: Global,
  indexRoute: { component: Home },
  childRoutes: [
    { path: "/signup", component: SignUp },
    { path: "/form", component: Form },
    { path: "/pick-plan", component: PickPlan }
  ]
};
