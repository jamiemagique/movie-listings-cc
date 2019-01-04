import sortDesc from '.';

it('sorts items correctly', () => {
  const items = [
    { id: 1, popularity: 1, },
    { id: 2, popularity: 100, },
    { id: 3, popularity: 50, },
  ];
  expect(sortDesc(items)).toMatchSnapshot();
});
