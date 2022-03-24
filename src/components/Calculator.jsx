import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CalcRow from './CalcRow';
import calculate from '../logic/calculate';
import styles from '../styling/Calculator.module.css';

function Calculator() {
  const keys = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickHandler = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <table className={styles.calculator}>
      <tbody>
        <tr>
          <td className={styles.calculator__result} data-testid="display" colSpan="4">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </td>
        </tr>
        {keys.map((row) => <CalcRow key={uuidv4()} row={row} clickHandler={clickHandler} />)}
      </tbody>
    </table>
  );
}

export default Calculator;
