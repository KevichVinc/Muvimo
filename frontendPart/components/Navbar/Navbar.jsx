import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profiles" activeClassName={style.active}>
          Profiles
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
      <div className={style.item}>
        <NavLink to="/feed" activeClassName={style.active}>
          Feed
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/newprofile" activeClassName={style.active}>
          Create new profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/myprofile" activeClassName={style.active}>
          My profile
        </NavLink>
      </div>
    </nav>
  );
}
