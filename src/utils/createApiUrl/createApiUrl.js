import { API_BASEURL, API_KEY } from '../../config';

/**
 * Creates a URL to the API.
 *
 * @param {string} path - API resource, including a `/` prefix.
 * @returns {string} - API url
 */
const createApiUrl = path => `${API_BASEURL}${path}?api_key=${API_KEY}`;

export default createApiUrl;
