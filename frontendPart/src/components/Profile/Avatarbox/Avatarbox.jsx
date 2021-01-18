import React from 'react';
import style from './Avatarbox.module.css';

export default function Avatarbox() {
  return (
    <div className={style.main}>
      <div className={style.ava}>
        <img
          src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
          alt="ava"
        />
      </div>
      <div className={style.editphoto}>
        <button type="submit">Edit Photo</button>
      </div>
      <div className={style.editprofile}>
        <button type="submit">Edit Profile</button>
      </div>
    </div>
  );
}
