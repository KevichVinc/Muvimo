import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as appAC from '../../redux/actionCreators/profiles';
import Avatar from '../NewProfile/Inputs/Avatar';
import Firstname from '../NewProfile/Inputs/Firstname';
import Lastname from '../NewProfile/Inputs/Lastname';
import Age from '../NewProfile/Inputs/Age';
import City from '../NewProfile/Inputs/City';
import Skills from '../NewProfile/Inputs/Skills';
import Favorites from '../NewProfile/Inputs/Favorites';

import style from './EditProfile.module.css';

export default function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const editProfile = () => {
    dispatch(appAC.editProfile(profile));
  };

  return (
    <div className={style.main}>
      <Avatar />
      <Firstname />
      <Lastname />
      <Age />
      <City />
      <Skills />
      <Favorites />
      <button type="button" onClick={editProfile}>
        Edit profile
      </button>
    </div>
  );
}
