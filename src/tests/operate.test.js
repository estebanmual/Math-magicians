import operate from '../logic/operate';

it('sums correctly', () => {
  expect(operate('123', '123', '+')).toBe('246');
});

it('subtract correctly', () => {
  expect(operate('123', '123', '-')).toBe('0');
});

it('multiplies correctly', () => {
  expect(operate('123', '2', 'x')).toBe('246');
});

it('divides correctly', () => {
  expect(operate('123', '123', '÷')).toBe('1');
});

it('modules correctly', () => {
  expect(operate('123', '123', '%')).toBe('0');
});

it('modules correctly', () => {
  expect(operate('123', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});

it('Cannot divide by 0', () => {
  expect(operate('123', '0', '÷')).toBe('Can\'t divide by 0.');
});

it('Unknown operation', () => {
  expect(() => operate('123', '0', undefined)).toThrow("Unknown operation 'undefined'");
});
