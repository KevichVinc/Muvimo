import React, { useEffect } from 'react';
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
  useEffect(() => dispatch(appAC.clearProfileState()), []);
  const createProfile = () => {
    dispatch(appAC.createProfile(profile));
  };

  return (
    <div className={style.main}>
      <Avatar className={style.inputs} />
      <Firstname className={style.inputs} />
      <Lastname className={style.inputs} />
      <Age className={style.inputs} />
      <City className={style.inputs} />
      <Skills className={style.inputs} />
      <Favorites className={style.inputs} />
      <button type="button" onClick={createProfile}>
        Create profile
      </button>
    </div>
  );
}
