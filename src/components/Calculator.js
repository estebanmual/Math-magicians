import { useState } from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  function clickHandler(e) {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }

  return (
    <table className={styles.calculator} id="calculator__table">
      <tbody>
        <tr>
          <td className={styles.calculator__result} colSpan="4">
            { total }
            { operation }
            { next }
          </td>
        </tr>
        <tr className={styles.calculator__button}>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>AC</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>+/-</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>%</button></td>
          <td className={styles.calculator__button__orange}><button type="button" onClick={clickHandler}>÷</button></td>
        </tr>
        <tr>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>7</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>8</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>9</button></td>
          <td className={styles.calculator__button__orange}><button type="button" onClick={clickHandler}>x</button></td>
        </tr>
        <tr>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>4</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>5</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>6</button></td>
          <td className={styles.calculator__button__orange}><button type="button" onClick={clickHandler}>-</button></td>
        </tr>
        <tr>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>1</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>2</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>3</button></td>
          <td className={styles.calculator__button__orange}><button type="button" onClick={clickHandler}>+</button></td>
        </tr>
        <tr>
          <td colSpan="2" className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>0</button></td>
          <td className={styles.calculator__button__grey}><button type="button" onClick={clickHandler}>.</button></td>
          <td className={styles.calculator__button__orange}><button type="button" onClick={clickHandler}>=</button></td>
        </tr>
      </tbody>
    </table>
  );
}
