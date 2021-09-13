import style from './Section.module.css'
import React from 'react';
import PropTypes from 'prop-types';


const Section = ({ title, children }) => (
    <div className={style.section}>
        <div className={style.title}>{title}</div>
        <div>{children}</div>
    </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;