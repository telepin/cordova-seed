# Introduction
This seed project provides a fast and flexible base for mobile applications using Cordova and Angular.

We use [Angular Seed](https://github.com/mgechev/angular-seed) for the base application of this project.

This seed lets you take advantage of:
- **Cordova** to build for all platforms (iOS, Android, Web etc.)
- **Bootstrap** for a dynamic and responsive look.
- **Ahead-of-Time** compilation for fast boot times, and a native feel.
- **Tree-Shaking** support to reduce package size.
- All the additional incredible tools included in the [Angular Seed](https://github.com/mgechev/angular-seed) project

# The Basics
**Note: We recommend node >= 6.5.0, npm >= v3.10.3, cordova >= v8.0.0**

In order to start using the seed:
```bash
# Install cordova

# On Windows
$ npm install -g cordova

# On UNIX
$ sudo npm install -g cordova


# Install project dependencies
$ npm install

# Runs angular project on browser
$ npm start

# Runs project on browser, and test cases, as well as provides coverage report
$ npm run start.deving

# Add platform to cordova
$ cordova platform add **platform**
# For example
$ cordova platform add android
$ cordova platform add ios

# Builds cordova application
$ npm run build.cordova --**platform**
# For example
$ npm run build.cordova --android
$ npm run build.cordova --ios
```
_For additional commands, please visit [Angular Seed](https://github.com/mgechev/angular-seed)_