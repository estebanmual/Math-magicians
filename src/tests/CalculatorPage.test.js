import React from 'react';
import { render, screen } from "@testing-library/react";
import CalculatorPage from '../pages/CalculatorPage.jsx';

it('renders correctly', () => {
  render(<CalculatorPage />);
  expect(screen.getByRole('table')).toBeInTheDocument();
});
