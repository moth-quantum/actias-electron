# Q1 Synth Electron App
## About
This codebase contains the Electron 'shell' that houses the Q1 Synth web app. It enables this web app to be packaged up as a desktop app for Mac OS, Linux and Windows.

It is an installation of the Electron-Forge project - an all-in-one tool for packaging and distributing Electron applications. For more information, see the [Electron-Forge docs](https://www.electronforge.io/).

The web app that this 'shell' houses, as well as information on how to actively work on it, can be found [here](https://github.com/lunar.build/q1synth).

The remote API that handles networking using websockets can be found [here](https://github.com/lunar-build/moth-q1-api).

## Environment Variables
The Q1 Synth desktop app requires connection to a remote API for networking to function. These credentials include the domain of the remote API, an API key and a Pusher key for authentication. Contact Lunar for a copy of these.
* copy .env.example to .env and fill out with the appropriate credentials
* API_DOMAIN should follow the format listed in .env.example
* An API_TOKEN can be generated using Laravel Tinker on the command line of the API server. For instructions, see [here](https://github.com/lunar-build/moth-q1-api).
* API_PUSHER_KEY refers to the REVERB_APP_KEY in the remote server's .env file

## Local Setup
To further develop or publish a new release of this app, you need to set it up locally. You will need to install Node and Yarn.
### Install Node
* Install nvm - see [https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
* Run `nvm use` at the root of the directory and follow instructions to install the correct Node version if missing.
### Install Yarn
* Install yarn - `npm install --global yarn`

### Build Node Modules
* Run `yarn` at the root of the directory to install all Node packages (dependencies)

## Local Development
You can develop this application and the web application concurrently. 
* Spin up [local version of web app](https://github.com/moth-quantum/actias-backend) 
* http://localhost:5147 to view the web application
* `yarn start` or `npm run start` to view the desktop application

## Building Distributables
[Electron-Forge docs](https://www.electronforge.io/#building-distributables)

* In the web app repo, run `yarn build` or `npm run build` to generate a bundled version of the html, css and js files
* Clear the contents of src/q1synth2 in this repo
* Copy the contents of the build/ folder in the web app repo into src/q1synth2 in this repo
* Currently, the variables passed from .env file in preload.js are not available at build time. Temporarily, we have to paste in the credentials. Do not commit these to the repo!
* `yarn make` or `npm run make` to package up the distributable for the platform you are currently working on
* `yarn make --arch=arm64,x64` or `npm run make --arch=arm64,x64` to package up distributables for both Apple Intel and Apple Silicon chips

## Publishing
To publish distributables, you must have write access to this Github repo, as well as the correct code signing certificates in your keychain, and a valid Apple ID account credentials in the .env file.
* See the [Electron Forge docs](https://www.electronforge.io/guides/code-signing/code-signing-macos) on code signing for information on how to generate code signing certificates and add them to your keychain using Xcode.
* See the [Electron Forge docs](https://www.electronforge.io/guides/code-signing/code-signing-macos) for generating credentials for notarization process.
* [Generate a personal access](https://github.com/settings/tokens/new) token with write access
* Paste token into GITHUB_TOKEN in .env file
* Increment the version number in package.json
* Replace the exposed variables in src/preload.js with those in your .env file. Do not commit this file!
```js
contextBridge.exposeInMainWorld('environment', process.env.ENVIRONMENT) // replace
contextBridge.exposeInMainWorld('apiDomain', process.env.API_DOMAIN) // replace
contextBridge.exposeInMainWorld('apiWsDomain', process.env.API_WS_DOMAIN) // replace
contextBridge.exposeInMainWorld('apiToken', process.env.API_TOKEN) // replace
contextBridge.exposeInMainWorld('apiPusherKey', process.env.API_PUSHER_KEY) // replace
```
* `yarn run publish` to publish the distributable for the platform you are currently working on
* `yarn run publish --arch=arm64,x64` to publish distributables for both Apple Intel and Apple Silicon chips

Releases are available [here](https://github.com/moth-quantum/Actias/releases).
