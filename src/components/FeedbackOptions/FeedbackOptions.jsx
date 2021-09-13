import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={style.feedbackMenu}>
        {options.map(option=> (
        <button className={style.button} type="button" key={option} onClick={()=> onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
)
    
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;