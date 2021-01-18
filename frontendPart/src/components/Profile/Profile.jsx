import React from 'react';
import style from './Profile.module.css';

// import Avatarbox from './Avatarbox/Avatarbox';
import Avatar from './Avatarbox/Avatar';
import Avataredit from './Avatarbox/Avataredit';
import Infobox from './Infobox/Infobox';
import Friendsbox from './Friendsbox/Friendsbox';
import Addpost from './Addpost/Addpost';
import Post from './Posts/Post';
import Portfolio from './Portfolio/Portfolio';

export default function Profile() {
  return (
    <div className={style.main}>
      <div className={style.avatar}>
        <Avatar />
      </div>
      <div className={style.avataredit}>
        <Avataredit />
      </div>
      <div className={style.profileinfo}>
        <Infobox />
      </div>
      <div className={style.friends}>
        <Friendsbox />
      </div>
      <div className={style.posts}>
        <Post />
      </div>
      <div className={style.friendsOnline}>
        <Friendsbox />
      </div>
      <div className={style.addpost}>
        <Addpost />
      </div>
      <div className={style.posts}>
        <Post />
      </div>
      <div className={style.portfolio}>
        <Portfolio />
      </div>
      <div className={style.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
}
