import createApiUrl from '.';

/**
 * We mock the configuration values so if they 
 * change over time our tests don't fail, also
 * we don't need to set up any env variables.
 */
jest.mock('../../config', () => ({
  API_BASEURL: 'api.example.com',
  API_KEY: '<api_key>',
}));

it('creates an api url correctly', () => {
  expect(createApiUrl('/configuration')).toMatchSnapshot();
});
