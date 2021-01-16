import React from 'react';
import style from './Friendsbox.module.css';

export default function Friendsbox() {
  return (
    <div className={style.main}>
      <div className={style.friends}>All Friends</div>
      <div className={style.counter}>365</div>
      <div className={style.friendlist}>img</div>
    </div>
  );
}
