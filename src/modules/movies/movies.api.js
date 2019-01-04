import createApiUrl from '../../utils/createApiUrl';

export const fetchMoviesData = async () => {
  const API_URLS = [
    '/configuration',
    '/genre/movie/list',
    '/movie/now_playing',
  ];

  return await Promise.all(
    API_URLS.map(url => fetch(createApiUrl(url))
         .then(response => response.json())
         .then(data => {
      if (data.status_code) throw data;
      return data;
    }))
  )
};
