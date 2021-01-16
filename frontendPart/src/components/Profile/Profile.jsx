import React from 'react';
import style from './Profile.module.css';
import Avatarbox from './Avatarbox/Avatarbox';
import Infobox from './Infobox/Infobox';
import Friendsbox from './Friendsbox/Friendsbox';

export default function Profile() {
  return (
    <div className={style.main}>
      <div className={style.avatarbox}>
        <Avatarbox />
      </div>
      <div className={style.profileinfo}>
        <Infobox />
      </div>
      <div className={style.friends}>
        <Friendsbox />
        <Friendsbox />
      </div>
      <div className={style.addpost}>Add Post Block</div>
      <div className={style.portfolio}>Portfolio Block</div>
      <div className={style.posts}>Posts Block</div>
      <div className={style.groups}>Groups Block</div>
    </div>
  );
}
