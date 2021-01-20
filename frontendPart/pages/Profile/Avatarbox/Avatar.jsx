import React from 'react';
import style from './Avatar.module.css';

export default function Avatar() {
  return (
    <div className={style.main}>
      <div className={style.ava}>
        <img
          src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
          alt="ava"
        />
      </div>
    </div>
  );
}
