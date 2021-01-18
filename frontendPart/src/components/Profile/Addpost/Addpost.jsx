import React from 'react';
import style from './Addpost.module.css';

export default function Addpost() {
  return (
    <div className={style.main}>
      <div className={style.inputArea}>
        <input type="text" id={style.fname} name="fname" />
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
