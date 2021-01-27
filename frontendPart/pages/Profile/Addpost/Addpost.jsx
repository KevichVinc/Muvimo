import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './Addpost.module.css';
import * as appAC from '../../../redux/actionCreators';

export default function Addpost() {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (state) => state.app.addPost.currentInput,
  );
  const sendInput = (e) =>
    dispatch(appAC.currentInputValue(e.target.value));

  return (
    <div className={style.main}>
      <div className={style.inputArea}>
        <input
          type="text"
          placeholder="Type here"
          id={style.fname}
          value={inputValue}
          onChange={sendInput}
        />
      </div>
      <div className={style.addImg}>
        <button type="submit">add img</button>
      </div>
      <div className={style.addVideo}>
        <button type="submit">add video</button>
      </div>
      <div className={style.addAudio}>
        <button type="submit">add audio</button>
      </div>
    </div>
  );
}
