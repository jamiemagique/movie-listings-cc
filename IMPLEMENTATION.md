# Implementation notes

## TMDb API requests

The three input API requests are made synchronous using `Promise.all()`, see `/src/modules/movies/movies.api.js`.

## Components

The main action happens in a "container" component - `MovieListings`.
Keeping all functionality inside this component and delegating as much of the UI and styling on to it's child components.

## UI states

There are three possible displays states:

1. Loading - Throttle your network
2. Loaded - Fully functional movies listings :man_dancing:
3. Error - Block any TMDb API request

## Styling

As this is a one page application with a small set of UI components I've opted to keep the styling minimal, using modern CSS (CSS variables and CSS grid).

The components are styled using Create React App's built in [CSS modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) support, utilising the naming convention `ComponentName.module.css`.

> If this app was to grow any larger PostCSS or a preprocessor would be beneficial.

## Improvements

1. The display of the filters at mobile sizes could be collapsed or tucked away in a slide out panel to allow the movie results to be seen and improve the overall experience
2. Add styling to the genre checkboxes
3. `react-input-range` package wasn't the easiest to style or test, I would consider replacing or rolling your own given more time.
4. Add type checking / at least `prop-types`
5. Embellish eslint config and add stylelint
6. Improve accessibility and add announcements
7. Compress SVGs / assets in build

Others:

1. Show a count of the movies for each genre
2. Add a reset/clear filters option
