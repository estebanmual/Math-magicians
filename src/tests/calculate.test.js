import calculate from '../logic/calculate';

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

it('buttonName is 0 and obj.next is 0', () => {
  const obj = {
    total: '0',
    next: '0',
    operation: null,
  };
  const resObj = {};

  expect(calculate(obj, '0')).toStrictEqual(resObj);
});

it('If there obj.operation && obj.next === 0 true ', () => {
  const obj = {
    total: '0',
    next: '12',
    operation: '+',
  };
  const resObj = {
    total: '0',
    next: '129',
    operation: '+',
  };

  expect(calculate(obj, '9')).toStrictEqual(resObj);
});

it('If there obj.operation && !obj.next === 0 true ', () => {
  const obj = {
    total: '0',
    next: null,
    operation: '+',
  };
  const resObj = {
    total: '0',
    next: '9',
    operation: '+',
  };

  expect(calculate(obj, '9')).toStrictEqual(resObj);
});

it('If buttonName === \'.\' && obj.next === true && obj.next includes \'.\'', () => {
  const obj = {
    total: '0',
    next: '10.',
    operation: '+',
  };
  const resObj = {
    total: '0',
    next: '10.',
    operation: '+',
  };

  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('If buttonName === \'.\' && obj.operation === true', () => {
  const obj = {
    total: '0',
    next: null,
    operation: '+',
  };
  const resObj = {
    next: '0.',
  };

  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('If buttonName === \'.\' && obj.total === true && obj.total includes \'.\'', () => {
  const obj = {
    total: '0.',
    next: null,
    operation: null,
  };
  const resObj = {};

  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('If buttonName === \'.\' && obj.total === true', () => {
  const obj = {
    total: '0',
    next: null,
    operation: null,
  };
  const resObj = { total: `${obj.total}.` };
  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('If buttonName === \'.\'', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const resObj = { total: '0.' };

  expect(calculate(obj, '.')).toStrictEqual(resObj);
});

it('If buttonName === "=" ', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const resObj = {};

  expect(calculate(obj, '=')).toStrictEqual(resObj);
});

it('If buttonName === "+/-" && obj.total === true', () => {
  const obj = {
    total: '10',
    next: null,
    operation: null,
  };
  const resObj = {
    total: '-10',
    next: null,
    operation: null,
  };

  expect(calculate(obj, '+/-')).toStrictEqual(resObj);
});

it('If buttonName === "+/-" ', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const resObj = {};

  expect(calculate(obj, '+/-')).toStrictEqual(resObj);
});

it('If obj.operation === "true" && (obj.total && !obj.next) === false ', () => {
  const obj = {
    total: '10',
    next: '9',
    operation: '+',
  };
  const resObj = {
    total: '19',
    next: null,
    operation: '+',
  };

  expect(calculate(obj, '+')).toStrictEqual(resObj);
});

it('If !obj.next ', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const resObj = {
    operation: '+',
  };

  expect(calculate(obj, '+')).toStrictEqual(resObj);
});
