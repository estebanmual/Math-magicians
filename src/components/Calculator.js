import React from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
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
            <td><button type="button" onClick={this.clickHandler}>AC</button></td>
            <td><button type="button" onClick={this.clickHandler}>+/-</button></td>
            <td><button type="button" onClick={this.clickHandler}>%</button></td>
            <td className={styles.calculator__button__orange}><button type="button" onClick={this.clickHandler}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.clickHandler}>7</button></td>
            <td><button type="button" onClick={this.clickHandler}>8</button></td>
            <td><button type="button" onClick={this.clickHandler}>9</button></td>
            <td className={styles.calculator__button__orange}><button type="button" onClick={this.clickHandler}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.clickHandler}>4</button></td>
            <td><button type="button" onClick={this.clickHandler}>5</button></td>
            <td><button type="button" onClick={this.clickHandler}>6</button></td>
            <td className={styles.calculator__button__orange}><button type="button" onClick={this.clickHandler}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.clickHandler}>1</button></td>
            <td><button type="button" onClick={this.clickHandler}>2</button></td>
            <td><button type="button" onClick={this.clickHandler}>3</button></td>
            <td className={styles.calculator__button__orange}><button type="button" onClick={this.clickHandler}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" onClick={this.clickHandler}>0</button></td>
            <td><button type="button" onClick={this.clickHandler}>.</button></td>
            <td className={styles.calculator__button__orange}><button type="button" onClick={this.clickHandler}>=</button></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
