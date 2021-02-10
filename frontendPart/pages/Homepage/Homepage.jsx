import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './Homepage.module.css';
import * as appAC from '../../redux/actionCreators/profiles';

export default function Homepage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(appAC.findProfileById(id)), []);
  return (
    <div className={style.homeBackground}>
      <div className={style.text}>
        <div className={style.welcome}>
          welcome to
          <div className={style.artincubator}>ART-INCUBATOR</div>
        </div>
      </div>
    </div>
  );
}
