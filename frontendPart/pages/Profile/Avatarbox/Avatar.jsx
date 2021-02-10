import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as profileSelectors from '../../../redux/selectors/profiles';
import style from '../Profile.module.css';

export default function Avatar() {
  const avatar = useSelector(profileSelectors.getProfileAvatar);
  const firstName = useSelector(profileSelectors.getProfileFirstName);
  const lastName = useSelector(profileSelectors.getProfileLastName);
  return (
    <div className={style.userShortDescription}>
      <NavLink to="#!" className={style.avatarLink}>
        <div className={style.avatarBorder} />
        <img
          className={style.avatarContent}
          src={avatar}
          alt="avatar"
        />
      </NavLink>
      <div className={style.shortDescriptionFullName}>
        {`${firstName} ${lastName}`}
      </div>
    </div>
  );
}
