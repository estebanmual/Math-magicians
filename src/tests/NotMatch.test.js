import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NotMatch from '../pages/NotMatch';

it('renders correctly', () => {
  render(<NotMatch />);
  expect(screen.getByText('No match for this page')).toBeInTheDocument();
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<NotMatch />).toJSON();
  expect(tree).toMatchSnapshot();
});
