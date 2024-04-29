# Q1 Synth Electron App
## About
This codebase contains the Electron 'shell' that houses the Q1 Synth web app. It enables this web app to be packaged up as a desktop app for Mac OS, Linux and Windows.

It is an installation of the Electron-Forge project - an all-in-one tool for packaging and distributing Electron applications. For more information, see the [Electron-Forge docs](https://www.electronforge.io/).

The web app that this 'shell' houses, as well as information on how to actively work on it, can be found [here](https://github.com/cephasteom/q1synth2).

## Environment Variables
* copy .env.example to .env and fill out with the appropriate credentials

## Local Development
You can develop this application and the web application concurrently. 
* Spin up [local version of web app](https://github.com/cephasteom/q1synth2) 
* http://localhost:5147 to view the web application
* `yarn start` to view the desktop application

## Building Distributables
[Electron-Forge docs](https://www.electronforge.io/#building-distributables)

* In the web app repo, run `yarn build` to generate a bundled version of the html, css and js files
* Clear the contents of src/q1synth2 in this repo
* Copy the contents of the build/ folder in the web app repo into src/q1synth2 in this repo
* `yarn make` to package up the distributables

## Publishing
TBC