import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Avataredit.module.css';

export default function Avataredit() {
  return (
    <div className={style.main}>
      <div className={style.editphoto}>
        <button type="submit">Edit Photo</button>
      </div>
      <div className={style.editprofile}>
        <button type="submit">
          <NavLink to="/editprofile">Edit Profile </NavLink>
        </button>
      </div>
    </div>
  );
}
