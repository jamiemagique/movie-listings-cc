# Movie listings challenge

## Overview

This project is a React app bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses the TMDb API to display a list of now showing movies allowing the user to filter by genre and rating. You can read the full brief at `BRIEF.md`.

You can view the implementation notes on the solution provided in this codebase at `IMPLEMENTATION.md`.

## Getting started

### Requirements

* [Node & npm](https://nodejs.org/en/download/)
* API key for the [TMDb API](https://www.themoviedb.org/account/signup)

Before you can run the app you'll need to add the following environment variables:

```
REACT_APP_API_KEY=<your_tmdb_api_key>
```

Not sure how? See the documentation from [Create React App](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#adding-temporary-environment-variables-in-your-shell).

### Local development

```
npm install
npm start
```

This will run the app in the development mode.<br>
If the site doesn't automatically open in your favourite browser, you can see the urls in the terminal you used to run the script, it's usually [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits.<br>
You will also see any lint errors in the console, you can also run the `npm run lint` script.

## Available scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode, useful during development.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

Runs all tests and will generate and open a coverage report.

You can use this report as a **guide** to view uncovered areas of your app.

### `npm run lint`

Lints all javascript files using the eslint rules provided by Create React App.

I have omitted adding stylelint to lint the stylesheets for speed.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

You can view a production version of this app locally by following the instructions that follow after this script.

[tmdb-signup]: https://www.themoviedb.org/account/signup
