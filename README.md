<p align="center" >
  <a href="http://newspring.cc">
    <img src="https://s3.amazonaws.com/ns.images/newspring/icons/newspring-church-logo-black.png" alt="NewSpring Church" title="NewSpring Church" />
  </a>
</p>

# Slingshot
[![Circle CI](https://circleci.com/gh/NewSpring/Slingshot.svg?style=svg)](https://circleci.com/gh/NewSpring/Slingshot)
Rock RMS Auto Deployment Service

![Rock RMS](https://raw.githubusercontent.com/SparkDevNetwork/Rock/develop/Images/github-banner.png)



## Development

#### Dependencies
1. [`normajs`](https://www.npmjs.com/package/normajs)
2. [`meteor`](https://meteor.com)

To get up and running with Slingshot, run the following commands:

```bash
$ norma build
$ norma

```

You should then be able to go to localhost:3000 to see the app running


## App Structure

This application is using [webpack](https://atmospherejs.com/webpack/webpack) with [meteor](https://meteor.com) for the purposes of using [React](http://facebook.github.io/react/) and doing code splitting. Most of this is set up in the `entry` folder, and you won't need to hang out in there very often for this project.

#### Front End

[Front End Docs](.docs/front-end.md)

#### Azure

Interacting with [Azure](https://azure.microsoft.com/en-us/) will be done in the node package in the `.azure` folder.

#### Rock

Any [Rock](http://www.rockrms.com/) related scripts or files needed for auto launching be done in the `.rock` folder.

## Deployments

Release are auto-deployed when code is committed to the master branch
