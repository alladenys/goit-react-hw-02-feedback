import React from 'react';
import style from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <div>
        <span className={style.statysticItem}>Good:{good}</span>
        <span className={style.statysticItem}>Neutral:{neutral}</span>
        <span className={style.statysticItem}>Bad:{bad}</span>
        <span className={style.statysticItem}>Total:{total}</span>
        <span className={style.statysticItem}>
          Positive percentage:{positivePercentage}%
        </span>
     </div>
  );
};

Statistic.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
