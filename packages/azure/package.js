Package.describe({
  summary: "Interact with the Azure Api",
  version: "1.0.0",
  name: "newspring:azure"
});

Npm.depends({
  "adal-node": "0.1.17",
  "azure-arm-dns": "https://github.com/NewSpring/azure-arm-dns/archive/f8ce8af028f5ca77564ca9555e11a4ffd5e23481.tar.gz",
  "azure-arm-resource": "0.10.6",
  "azure-common": "0.9.16"
})

Package.onUse(function (api) {

  api.use('ecmascript')
  // Specify the source code for the package.
  api.addFiles('index.js', 'server');
  api.addFiles('lib/token.js', 'server');
  api.addFiles('lib/cname.js', 'server');
  api.addFiles('lib/resourceGroup.js', 'server');
  api.addFiles('lib/deployment.js', 'server');
  api.addFiles('lib/cert.js', 'server');
  api.addFiles('lib/domain.js', 'server');

  api.export('Azure', 'server');
});
