import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalcRow from '../components/CalcRow';

const mockhandler = jest.fn();
const row = ['AC', '+/-', '%', '÷'];

it('renders correctly when there are no items', () => {
  const tree = renderer
    .create(<table><tbody><CalcRow row={row} clickHandler={mockhandler} /></tbody></table>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const button = render(<table><tbody><CalcRow row={row} clickHandler={mockhandler} /></tbody></table>).getByText('÷');
  fireEvent.click(button);

  expect(mockhandler).toHaveBeenCalledTimes(1);
});
