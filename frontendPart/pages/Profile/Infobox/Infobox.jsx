import React from 'react';
import style from './Infobox.module.css';

export default function Infobox() {
  return (
    <div className={style.main}>
      <div className={style.fullname}>
        <div>Ninja Ninjievich</div>
      </div>
      <div className={style.about}>
        <div>City: Moscow</div>
        <div>Religion: Javascript, ESlint + Airbnb</div>
        <div>Political views: Code Convention</div>
      </div>
      <div className={style.counters}>
        <button type="submit">audioCounter</button>
        <button type="submit">photoCounter</button>
        <button type="submit">videoCounter</button>
        <button type="submit">projectsCounter</button>
      </div>
    </div>
  );
}
