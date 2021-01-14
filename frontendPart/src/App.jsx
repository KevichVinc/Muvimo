import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';
import tracer from './assets/img/Tracer.png';

export default function App({ title }) {
  App.propTypes = {
    title: PropTypes.string.isRequired,
  };
  return (
    <div>
      <div className={style.title}>{title}</div>
      <img src={tracer} alt="Hot bitch" />
    </div>
  );
}
