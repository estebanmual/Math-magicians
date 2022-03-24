import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const button = render(<Calculator />).getByText('7');
  fireEvent.click(button);

  expect(screen.getByTestId('display')).toHaveTextContent('7');
});
