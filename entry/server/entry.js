import 'slingshot/app-methods';
import 'slingshot/server/app-subscriptions'

// import 'payments/server/payments'
import 'payments/server/stub-payments'

// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === "production") {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require("../client/routes");
}
