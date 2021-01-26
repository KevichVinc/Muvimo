import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './FriendRow.module.css';
import * as appAC from '../../redux/actionCreators';

export default function FriendRow(props) {
  FriendRow.propTypes = {
    img: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
  };
  const { img, firstName, lastName, profileId } = props;
  const dispatch = useDispatch();
  const deleteProfile = () => {
    dispatch(appAC.deleteThisProfile(profileId));
  };

  return (
    <div className={style.main}>
      <img className={style.profilePhoto} src={img} alt="ava-img" />
      <div className={style.nameAndMessage}>
        <div>{`${firstName} ${lastName}`}</div>
        <button type="submit">Send Message</button>
      </div>
      <div className={style.quickMenu}>
        <button type="submit">Quick Menu</button>
      </div>
      <div className={style.deleteButton}>
        <button type="button" onClick={deleteProfile}>
          Delete
        </button>
      </div>
    </div>
  );
}
