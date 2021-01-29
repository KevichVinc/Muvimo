import React from 'react';
import { useSelector } from 'react-redux';
import { getProfileAvatar } from '../../../redux/selectors/profiles';
import style from './Avatar.module.css';

export default function Avatar() {
  const avatar = useSelector(getProfileAvatar);
  return (
    <div className={style.main}>
      <div className={style.ava}>
        <img src={avatar} alt="ava" />
      </div>
    </div>
  );
}
