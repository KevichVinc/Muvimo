import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';
import muvimo from '../../assets/img/Muvimo-logo.png';

export default function Header() {
  return (
    <div className={style.header}>
      <NavLink to="/feed">
        <img src={muvimo} alt="logo" />
      </NavLink>
    </div>
  );
}
