import calculate from "../logic/calculate";

it('clears correctly', () => {
  const obj = {
    total: 123,
    next: '20',
    operation: '+',
  };
  const resObj = {
    total: 0,
    next: null,
    operation: null,
  };

  expect(calculate(obj, 'AC')).toStrictEqual(resObj);
});

it('adds number correctly', () => {
  const obj = {
    total: '0',
    next: '20',
    operation: null,
  };
  const resObj = {
    total: null,
    next: '209',
  };

  expect(calculate(obj, '9')).toStrictEqual(resObj);
});

it('adds dot correctly', () => {
  const obj = {
    total: '0',
    next: '20',
    operation: null,
  };
  const resObj = {
    total: '0',
    next: '20.',
    operation: null,
  };

  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('process equality symbol correctly', () => {
  const obj = {
    total: '1',
    next: '20',
    operation: '+',
  };
  const resObj = {
    total: '21',
    next: null,
    operation: null,
  };

  expect(calculate(obj, '=')).toStrictEqual(resObj);
});

it('process symbol change button correctly', () => {
  const obj = {
    total: '0',
    next: '20',
    operation: '+',
  };
  const resObj = {
    total: '0',
    next: '-20',
    operation: '+',
  };

  expect(calculate(obj, '+/-')).toStrictEqual(resObj);
});

it('process operation button correctly', () => {
  const obj = {
    total: '0',
    next: null,
    operation: null,
  };
  const resObj = {
    total: '0',
    next: null,
    operation: '+',
  };

  expect(calculate(obj, '+')).toStrictEqual(resObj);
});

it('process operation button correctly when there is already an operation', () => {
  const obj = {
    total: '0',
    next: null,
    operation: '+',
  };
  const resObj = {
    total: '0',
    next: null,
    operation: '-',
  };

  expect(calculate(obj, '-')).toStrictEqual(resObj);
});

it('The user has not typed a number yet, just save the operation', () => {
  const obj = {
    total: '0',
    next: null,
    operation: null,
  };
  const resObj = {
    total: '0',
    next: null,
    operation: '-',
  };

  expect(calculate(obj, '-')).toStrictEqual(resObj);
});

it('saves the operation and shift \'next\' into \'total\'', () => {
  const obj = {
    total: '0',
    next: '12',
    operation: null,
  };
  const resObj = {
    total: '12',
    next: null,
    operation: '+',
  };

  expect(calculate(obj, '+')).toStrictEqual(resObj);
});
