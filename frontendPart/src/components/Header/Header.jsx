import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

export default function Header() {
  return (
    <div className={style.header}>
      {' '}
      <NavLink to="/feed">Header</NavLink>
    </div>
  );
}
