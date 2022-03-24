import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(<Home />);
  expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
});
