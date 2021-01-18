import React from 'react';
import style from './Post.module.css';

export default function Post() {
  return (
    <div className={style.main}>
      <div className={style.authorInfo}>
        <div>Ninja Ninjievich</div>
      </div>
      <div className={style.postText}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec viverra condimentum scelerisque. Vivamus in
          condimentum odio. Mauris imperdiet, lectus eget commodo
          suscipit, purus dui suscipit lorem, vitae finibus tellus
          libero vel nulla. Aliquam porttitor a elit vitae
          ullamcorper. Quisque vitae arcu porttitor, accumsan purus a,
          porttitor ipsum. In tristique lacus eget mollis accumsan.
          Phasellus ac convallis diam. Cras condimentum tellus nec
          orci facilisis, nec gravida neque tincidunt.
        </div>
      </div>
      <div className={style.counters}>
        <button type="submit">audioCounter</button>
        <button type="submit">photoCounter</button>
        <button type="submit">videoCounter</button>
      </div>
    </div>
  );
}
