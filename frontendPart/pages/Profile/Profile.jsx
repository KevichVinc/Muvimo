import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // need NavLink later
import { useDispatch } from 'react-redux'; // need useSelector later

import style from './Profile.module.css';
import * as appAC from '../../redux/actionCreators/profiles';
import rusflag from '../../assets/img/russia.png';

import Avatar from './Avatarbox/Avatar';
// import Avataredit from './Avatarbox/Avataredit';
// import Infobox from './Infobox/Infobox';
// import Friendsbox from './Friendsbox/Friendsbox';

// import Addpost from './Addpost/Addpost';
// import Post from './Posts/Post';
// import Portfolio from './Portfolio/Portfolio';

// divs with next classNames - headerSocialLinksWrap, sectionNavigation & profileContentGrid will not be self-closing

export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => dispatch(appAC.findProfileById(id)), []);
  return (
    <div className={style.contentGrid}>
      <div className={style.profileHeader}>
        <div className={style.headerCover} />
        <div className={style.headerInfo}>
          <Avatar />

          <div className={style.headerSocialLinksWrap} />
          <div className={style.userStats}>
            <div className={style.counter}>
              <div className={style.title}>930</div>
              <div className={style.text}>POSTS</div>
            </div>
            <div className={style.counter}>
              <div className={style.title}>82</div>
              <div className={style.text}>FRIENDS</div>
            </div>
            <div className={style.counter}>
              <div className={style.title}>17</div>
              <div className={style.text}>PROJECTS</div>
            </div>
            <div className={style.counter}>
              <img className={style.img} src={rusflag} alt="RUSSIA" />
              <div className={style.textFlag}>RUSSIA</div>
            </div>
          </div>
          <div className={style.headerInfoActions}>
            <div className={style.addFriend}>Add Friend +</div>
            <div className={style.sendMessage}>Send Message</div>
          </div>
        </div>
      </div>
      <div className={style.sectionNavigation} />
      <div className={style.profileContentGrid} />
    </div>
  );
}
