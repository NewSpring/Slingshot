import 'NewSpringApp/app-methods';
import 'NewSpringApp/server/app-subscriptions'

// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === "production") {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require("../client/routes");
}
