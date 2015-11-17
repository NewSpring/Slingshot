// ensure data is setup in Rock
import "slingshot/server/models/rock-attributes"

// create methods for interactions
import "slingshot/server/methods"
import "slingshot/server/publications"



// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === "production") {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(WebpackStats);

  require("../client/routes");
}
