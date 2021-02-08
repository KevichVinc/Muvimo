import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import style from './FriendRow.module.css';
import earth from '../../assets/img/planet-earth-little.png';
import addFriend from '../../assets/img/add-friend-little.png';

export default function FriendRow(props) {
  const { avatar, firstName, lastName, id } = props;

  return (
    <div className={style.main}>
      <figure
        className={style.profilePhoto}
        style={{
          background: `url("https://source.unsplash.com/random/500x500") center center / cover no-repeat`,
        }}
      />
      <div className={style.profilePreviewInfo}>
        <div className={style.profileDescription}>
          <NavLink
            className={style.profileDescriptionAvatar}
            to={`/profile/${id}`}
          >
            <div className={style.profileAvaWrapper}>
              <div className={style.roundBorder} />
            </div>
            <div className={style.profileAvaContent}>
              <img
                className={style.roundedAva}
                src={avatar}
                alt="some avatar"
              />
            </div>
          </NavLink>
          <NavLink
            to={`/profile/${id}`}
            className={style.profileFullName}
          >
            {`${firstName} ${lastName}`}
          </NavLink>
          <p className={style.profileStatus}>
            Пока что мы все одинаковые. Но это скоро изменится!
          </p>
        </div>
        <div className={style.profileStats}>
          <div className={style.profileStat}>
            <p className={style.statCounter}>40</p>
            <p className={style.statTitle}>FRIENDS</p>
          </div>
          <div className={style.profileStat}>
            <p className={style.statCounter}>50</p>
            <p className={style.statTitle}>POSTS</p>
          </div>
          <div className={style.profileStat}>
            <p className={style.statCounter}>60</p>
            <p className={style.statTitle}>PROJECTS</p>
          </div>
        </div>
        <div className={style.profilePreviewActions}>
          <div className={style.privacyStatus}>
            <img src={earth} alt="status" />
          </div>
          <div className={style.inviteFriend}>
            <NavLink to="#!">
              <img src={addFriend} alt="+" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
FriendRow.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
