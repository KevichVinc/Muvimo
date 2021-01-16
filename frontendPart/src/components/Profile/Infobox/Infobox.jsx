import React from 'react';
import style from './Infobox.module.css';

export default function Infobox() {
  return (
    <div className={style.main}>
      <div className={style.fullname}>Full Name</div>
      <div className={style.about}>About</div>
      <div className={style.counters}>Counters</div>
    </div>
  );
}
