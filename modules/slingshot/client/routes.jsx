import Global from "./global";
import Home from "./home";
import SignUp from "./signup";
import Form from "./sections/form";
import PickPlan from "./pickPlan";
import PersonalInfo from "./personalInfo";
import ChurchInfo from "./churchInfo";
import BillingInfo from "./billingInfo";
import Success from "./success";

export default {
  path: "/",
  component: Global,
  indexRoute: { component: Home },
  childRoutes: [
    { path: "/signup", component: SignUp },
    { path: "/form", component: Form },
    { path: "/signup/step-1", component: PickPlan },
    { path: "/signup/step-2", component: PersonalInfo },
    { path: "/signup/step-3", component: ChurchInfo },
    { path: "/signup/step-4", component: BillingInfo },
    { path: "/signup/success", component: Success }
  ]
};
