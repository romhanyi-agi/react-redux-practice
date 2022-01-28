# react-redux-practice
---
A simple redux practice based on the awesome video, Redux For Beginners | React Redux Tutorial by Dev Ed:
https://www.youtube.com/watch?v=CVpUuw9XSjY

**Note**: This is a small practice project; therefore, the frontend and backend are not separated into different apps or folders.

## Install packages
---
### Backend packages

```
$ npm install express@4
$ npm install nodemon@1
$ npm install dotenv@6
$ npm install --save-dev eslint@5 eslint-plugin-import@2
$ npm install --save-dev eslint-config-airbnb-base@13
```

### Frontend packages

```
$ npm install react@16 react-dom@16
$ npm install whatwg-fetch@3
$ npm install prop-types@15
$ npm install babel-polyfill@6
$ npm install --save-dev @babel/core@7 @babel/cli@7
$ npm install --save-dev @babel/preset-env@7
$ npm install --save-dev @babel/preset-react@7
$ npm install --save-dev webpack@4 webpack-cli@3
$ npm install --save-dev webpack-dev-middleware@3
$ npm install --save-dev webpack-hot-middleware@2
$ npm install --save-dev babel-loader@8
$ npm install --save-dev eslint@5 eslint-plugin-import@2
$ npm install --save-dev eslint-plugin-jsx-a11y@6 eslint-plugin-react@7
$ npm install --save-dev eslint-config-airbnb@17
```

### Redux and react redux

```
$ npm install redux
$ npm install react-redux
```

## Configurations

### File structure

Create __public__, _server_, and _src_ folders in the root directory of the project.
And create _actions_ and _reducers_ under the _src_ folder.
Now we have the following directories:

-react-redux-practice (root)
    |_ node_modules
    |_ public
    |_ server
    |_ src
        |_actions
        |_reducers

### Set up config files

#### .gitignore

Create a new file in the root folder and name it **.gitignore**
Open and add the files and folders you don't want to sync with your github repo.

```
# dependencies
/node_modules

#environment variables
.env
```

#### .env

Create **.env** file in the root folder, Dotenv (we installed it above) will look for this file for the environment variables.

```
## Server Port
SERVER_PORT=3000
```

#### .eslintrc files

Create **.eslintrc** file in the root directory and set basic configuration to inherit only from Airbnb base, and add only one rule to allow debug messages to be displayed.

```json
{
  "extends": "airbnb-base",
  "env": {
    "node": true
  },
  "rules": {
    "no-console": "off"
  }
}
```

We will need another **.eslintrc** in the **src** folder to set configuration for the React code. Here we set the environment to be the browser instead of Node.
**Note**: for simplicity we turn off Props validation globally. This is not best practice and we shouldn't do it!

```json
{
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "rules": {
    "import/extensions": ["error", "always", { "ignorePackages": true }],
    "react/prop-types": "off"
  }
}
```

#### .babelrc

Step into the **src** directory and create **.babelrc** file. This will contain some basic configuration for older browser support.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11",
          "edge": "15",
          "safari": "10",
          "firefox": "50",
          "chrome": "49"
        }
      }
    ],
    "@babel/preset-react"
  ]
}
```

#### webpack configuration

Webpack can handle both the transformation jsx files and creating bundles, but it needs a Babel loader for it (we already installed it, see above.)
Let's create **webpack.config.js** in the root folder with the basic configurations.
It is a simple js file with a _module.exports_ variable exporting the properties that specify the transformation and bundling process.
We create two bundles, one for the application code and another for all the libraries that won't change much. Using splitChunks we can exclude these libraries from transformation and enabl optimization.

```js
const path = require("path");

module.exports = {
  mode: "development",
  // When using HMR the entry point has to be an array,
  // so a new entry point can be pushed when needed.
  entry: { app: ["./src/App.jsx"] },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all",
    },
  },
  // enables debugging
  devtool: "source-map",
};
```

Note: after setting up Webpack to compile and watch for changes we need to modify the **package.json** file as well. See next step.

### Modify the scripts variable in the package.json file

Open the **package.json** file and change 'scripts' to the following:

```json
"scripts": {
   "start": "nodemon -w server server/server.js",
   "test": "echo \"Error: no test specified\" && exit 1",
   "#lint": "Runs ESLint on all relevant files",
   "lint": "eslint . --ext js,jsx --ignore-pattern public",
   "#compile": "Generates JS bundles for production. Use with start.",
   "compile": "webpack --mode production",
   "#watch": "Compile, and recompile on any changes.",
   "watch": "webpack --watch"
 },
```
## Functionality

### Server
#### server.js file

Starts our server using express and webpack with HMR.

### Public
#### index.js file

Very basic home page for our app.

### Src
#### actions
  - index.js  - contains all the actions for managing statuses with redux.
#### reducers
  - index.js - a common reducer to combine the other separate reducers.
  - counter.js - reducer function for handleing the state of the counter with state and action parameters.
  - isLogged.js - reducer function for handling the loggedIn state. It also has a state and an action parameter.
#### jsx files
##### App.jsx
##### Header.jsx
##### Content.jsx
