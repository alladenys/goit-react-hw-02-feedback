import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

const Notification = ({message}) =>(<div className={style.message}>{message}</div>)

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;