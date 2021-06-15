**Learning React**

- NPM stands for Node Package Manager. 
- Yarn is a superset of NPM that solves many problems that NPM has.
- Babel is a JS transpiler that converts new JS code into old ones.
- Webpack solves all of these problems (use SASS for our styles, PostCSS for autoprefixing, minify both CSS and Javascript code) using one config file (named webpack.config.js) and one CLI command webpack.

**Content**

- [Installing npm and tools](#installing-npm-and-tools)
- [Create your first App](#create-your-first-app)
  - [Start the App](#start-the-app)
  - [Test Your Apps](#test-your-apps)
  - [Build your App](#build-your-app)
  - [Using Templates](#using-templates)
- [Exploring App](#exploring-app)
  - [Formatting Code Automatically](#formatting-code-automatically)
  - [Using HTTPS in Development](#using-https-in-development)
    - [Custom SSL certificate](#custom-ssl-certificate)
- [Styles and Assets](#styles-and-assets)
  - [Managing CSS and Styles](#managing-css-and-styles)
- [References](#references)

# Installing npm and tools

Download and install [nodejs](https://nodejs.org/en/download/)

```bash
$ node --version
v14.17.0

## Install yarn
npm install --global yarn

```


# Create your first App

```shell
## Using npm
npm init react-app my-app
cd my-app
npm start

## using npx
npx create-react-app my-app
cd my-app
npm start

## using yarn
yarn create react-app my-app
cd my-app
yarn start
```

## Start the App

```shell
npm start               # Starts the development server.
npm run build           # Bundles the app into static files for production.
npm test                # Starts the test runner.
npm run eject           # Removes this tool and copies build dependencies, 
                        # configuration files and scripts into the app directory. 
                        # If you do this, you can’t go back!
```    

## Test Your Apps

```shell
npm test 
##or 
yarn test
```

## Build your App

```shell
npm run build 
##or 
yarn build
```

## Using Templates

You can find a list of available templates by searching for [`cra-template-*`](https://www.npmjs.com/search?q=cra-template-*) on npm.

```shell
npx create-react-app my-app --template [template-name]
```

# Exploring App

For the project to build, these files must exist with exact filenames:

- public/index.html is the page template;
- src/index.js is the JavaScript entry point.
- You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by `webpack`. You need to put any JS and CSS files inside `src`, otherwise webpack won’t see them.

## Formatting Code Automatically

Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. 

```shell
npm install --save husky lint-staged prettier
## or
yarn add husky lint-staged prettier
```

## Using HTTPS in Development

```shell
## Windows (cmd.exe)
set HTTPS=true&&npm start

## Windows (Powershell)
($env:HTTPS = "true") -and (npm start)

## Linux, macOS (Bash)#
HTTPS=true npm start
```

### Custom SSL certificate

To set a custom certificate, set the `SSL_CRT_FILE` and `SSL_KEY_FILE` environment variables to the path of the certificate and key files in the same way you do for HTTPS above. Note that you will also need to set `HTTPS=true`.

```shell
HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start
```

# Styles and Assets

## Managing CSS and Styles

CSS Modules let you use the same CSS class name in different files without worrying about naming clashes. Learn more about CSS Modules here.

Install `node-sass`

```shell
$ npm install node-sass --save
## or
$ yarn add node-sass
```

Now you can rename `src/App.css` to `src/App.scss` and update `src/App.js` to import `src/App.scss`. 

To share variables between Sass files, you can use Sass imports. For example, src/App.scss and other component style files could include @import "./shared.scss"; with variable definitions.

```shell
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import '~nprogress/nprogress'; // importing a css file from the nprogress node module
```

**Adding a CSS Reset**

```shell
## inside index.css
@import-normalize; /* bring in normalize.css styles */

/* rest of app styles */
```


# References

- [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Create React App](https://create-react-app.dev/) / [Getting Started](https://create-react-app.dev/docs/getting-started)
