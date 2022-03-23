import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

it('renders correctly', () => {
  render(<Home />);
  expect(screen.getByText(/Lorem ipsum/)).toBeInTheDocument();
});
