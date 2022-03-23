import React from 'react';
import { render, screen } from "@testing-library/react";
import NotMatch from "../pages/NotMatch";

it('renders correctly', () => {
  render(<NotMatch />);
  expect(screen.getByText('No match for this page')).toBeInTheDocument();
});
