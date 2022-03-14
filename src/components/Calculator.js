import { Component } from 'react';
import styles from './Calculator.module.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table className={styles.calculator} id="calculator__table">
        <tbody>
          <tr>
            <td className={styles.calculator__result} colSpan="4">0</td>
          </tr>
          <tr className={styles.calculator__button}>
            <td><button type="button">AC</button></td>
            <td><button type="button">+/-</button></td>
            <td><button type="button">%</button></td>
            <td className={styles.calculator__button__orange}><button type="button">÷</button></td>
          </tr>
          <tr>
            <td><button type="button">7</button></td>
            <td><button type="button">8</button></td>
            <td><button type="button">9</button></td>
            <td className={styles.calculator__button__orange}><button type="button">x</button></td>
          </tr>
          <tr>
            <td><button type="button">4</button></td>
            <td><button type="button">5</button></td>
            <td><button type="button">6</button></td>
            <td className={styles.calculator__button__orange}><button type="button">-</button></td>
          </tr>
          <tr>
            <td><button type="button">1</button></td>
            <td><button type="button">2</button></td>
            <td><button type="button">3</button></td>
            <td className={styles.calculator__button__orange}><button type="button">+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button">0</button></td>
            <td><button type="button">.</button></td>
            <td className={styles.calculator__button__orange}><button type="button">=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
