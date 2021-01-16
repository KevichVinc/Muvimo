import React from 'react';
import style from './Friendsbox.module.css';

export default function Friendsbox() {
  return (
    <div className={style.main}>
      <div className={style.friends}>All Friends</div>
      <div className={style.counter}>365</div>
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
      <img
        className={style.friendlist}
        src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
        alt="ava"
      />
    </div>
  );
}
