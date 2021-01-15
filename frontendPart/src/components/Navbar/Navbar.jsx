import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css';

export default function Navlink() {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/portfolio" activeClassName={style.active}>
          Portfolio
        </NavLink>
      </div>
    </nav>
  );
}
