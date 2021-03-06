import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styling/Calculator.module.css';

function CalcRow(props) {
  const { row, clickHandler } = props;

  return (
    <tr>
      {row.map((key, index) => {
        let styleName = styles.calculator__button__grey;
        if ((index + 1) % 4 === 0 || key === '=') { styleName = styles.calculator__button__orange; }
        if (key === '0') { return <td key={uuidv4()} colSpan="2" className={styleName}><button type="button" onClick={clickHandler}>0</button></td>; }
        return (
          <td key={uuidv4()} className={styleName}><button type="button" onClick={clickHandler}>{key}</button></td>
        );
      })}
    </tr>
  );
}

export default CalcRow;

CalcRow.defaultProps = {
  row: [],
};

CalcRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func.isRequired,
};
