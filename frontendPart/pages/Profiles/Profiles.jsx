import React from 'react';
import { useSelector } from 'react-redux';
import FriendRow from './FriendRow';
import style from './Profiles.module.css';

export default function Profiles() {
  const profiles = useSelector((state) => state.profiles);
  return (
    <div className={style.main}>
      {profiles.map((item) => (
        <FriendRow
          img={item.img}
          firstName={item.firstName}
          lastName={item.lastName}
        />
      ))}
    </div>
  );
}
