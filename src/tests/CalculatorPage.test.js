import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  render(<CalculatorPage />);
  expect(screen.getByRole('table')).toBeInTheDocument();
});
