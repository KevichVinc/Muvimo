import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as appAC from '../../redux/actionCreators/profiles';
import Avatar from './Inputs/Avatar';
import Firstname from './Inputs/Firstname';
import Lastname from './Inputs/Lastname';
import Age from './Inputs/Age';
import City from './Inputs/City';
import Skills from './Inputs/Skills';
import Favorites from './Inputs/Favorites';

import style from './NewProfile.module.css';

export default function NewProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const createProfile = (e) => {
    e.preventDefault();
    dispatch(appAC.createProfile(profile));
  };

  return (
    <div className={style.main}>
      <form type="submit" onSubmit={createProfile}>
        <Avatar />
        <Firstname />
        <Lastname />
        <Age />
        <City />
        <Skills />
        <Favorites />
        <button type="submit">Create profile</button>
      </form>
    </div>
  );
}
