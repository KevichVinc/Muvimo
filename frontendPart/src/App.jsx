import React from 'react';

import style from './style.css';
import tracer from './assets/img/Tracer.png'

const App = ({ title }) => 
  <div>
    <div className={style.title}>{title}</div>
    <img src={tracer} alt="Hot bitch"/> 
  </div>
 ;
export default App;
