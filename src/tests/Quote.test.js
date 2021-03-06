import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

const axios = require('axios');

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('API data response', async () => {
  const request = await axios.get('https://random-math-quote-api.herokuapp.com/')
    .then((response) => response.data);

  const response = (request) => ({ author: request.author, id: request.id, quote: request.quote });

  expect(request).toMatchObject(response(request));
});
