import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(<Router><Navbar /></Router>);
  expect(screen.getByText('Math Magicians')).toBeInTheDocument();
});
