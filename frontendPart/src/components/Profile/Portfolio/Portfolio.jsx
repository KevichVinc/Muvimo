import React from 'react';
import style from './Portfolio.module.css';

export default function Infobox() {
  return (
    <div className={style.main}>
      <div className={style.projectsCounter}>
        <div className={style.counter}>Projects: 12</div>
        <button type="submit" className={style.addProject}>
          +
        </button>
      </div>
      <div className={style.project}>
        <div className={style.projectImg}>
          <img
            className={style.projectImg}
            src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
            alt="ava"
          />
        </div>
        <div className={style.projectDescript}>
          <div>Total War Warhanner 3 trailer</div>
          <div>Inspired by fans. Created for fans</div>
        </div>
      </div>
      <div className={style.project}>
        <div className={style.projectImg}>
          <img
            className={style.projectImg}
            src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
            alt="ava"
          />
        </div>
        <div className={style.projectDescript}>
          <div>Total War Warhanner 3 trailer</div>
          <div>Inspired by fans. Created for fans</div>
        </div>
      </div>
      <div className={style.project}>
        <div className={style.projectImg}>
          <img
            className={style.projectImg}
            src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
            alt="ava"
          />
        </div>
        <div className={style.projectDescript}>
          <div>Total War Warhanner 3 trailer</div>
          <div>Inspired by fans. Created for fans</div>
        </div>
      </div>
      <div className={style.project}>
        <div className={style.projectImg}>
          <img
            className={style.projectImg}
            src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
            alt="ava"
          />
        </div>
        <div className={style.projectDescript}>
          <div>Total War Warhanner 3 trailer</div>
          <div>Inspired by fans. Created for fans</div>
        </div>
      </div>
      <div className={style.project}>
        <div className={style.projectImg}>
          <img
            className={style.projectImg}
            src="https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg"
            alt="ava"
          />
        </div>
        <div className={style.projectDescript}>
          <div>Total War Warhanner 3 trailer</div>
          <div>Inspired by fans. Created for fans</div>
        </div>
      </div>
    </div>
  );
}
