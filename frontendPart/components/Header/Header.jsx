import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';
import homePNG from '../../assets/icons/home.png';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <NavLink to="/">ART-INCUBATOR</NavLink>
      </div>
      <div className={style.home}>
        <NavLink to="/">
          <img className={style.icon} src={homePNG} alt="home" />
        </NavLink>
      </div>
    </div>
  );
}
