import React from 'react';
import Calculator from '../components/Calculator';
import style from '../styling/CalculatorPage.module.css';

function CalculatorPage() {
  return (
    <div className={style.CalculatorPage}>
      <h2 className={style.CalculatorPage__title}>Let&apos;s do some math!</h2>
      <div className={style.CalculatorPage__calculator}>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
