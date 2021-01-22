import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FriendRow from './FriendRow';
import style from './Profiles.module.css';
import * as appAC from '../../redux/actionCreators';

export default function Profiles() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles);
  useEffect(() => {
    (async () => {
      try {
        const json = await axios.get('kill/profiles');
        dispatch(appAC.loadProfilesFromDb(json.data.profiles));
      } catch {
        alert('not connected');
      }
    })();
  }, []);

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
