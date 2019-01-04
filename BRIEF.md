# Movie listings challenge

## Brief

Using the TMDb API display a list of now showing movies allowing the user to filter by genre and rating.

> Note: [You’ll need an TMDb account][tmdb-signup] to request an API key. Once you are registered, go to account settings and click 'API' in sidebar.

## Input

- [TMDb Movies Now Playing API][tmdb-now-playing]
- [TMDb Movie genres API][tmdb-genres]
- [TMDb Image API][tmdb-images]
- Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.
- Multiple genres input (checkboxes). Must only contain genres from the TMDb API that are in the returned movie result set.

## Output

- Display a list of movies, each showing their title, genres and poster image.
- The movies should be ordered by popularity (most popular first - `popularity` property).
- Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have **both** 'Action' and 'Drama' genres.
- Movies should also be filterable by their rating (`vote_average` property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- The input API's should only be called once.

[create-react-app]: https://github.com/facebook/create-react-app#readme
[vue-cli]: https://vuejs.org/v2/guide/installation.html#CLI
[tmdb-now-playing]: https://developers.themoviedb.org/3/movies/get-now-playing
[tmdb-genres]: https://developers.themoviedb.org/3/genres/get-movie-list
[tmdb-signup]: https://www.themoviedb.org/account/signup
[tmdb-images]: https://developers.themoviedb.org/3/getting-started/images
[google-fonts]: https://fonts.google.com/
