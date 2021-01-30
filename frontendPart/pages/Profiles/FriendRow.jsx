import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import style from './FriendRow.module.css';
import * as appAC from '../../redux/actionCreators/profiles';

export default function FriendRow(props) {
  const { avatar, firstName, lastName, id } = props;
  const dispatch = useDispatch();
  const deleteProfileById = () => {
    dispatch(appAC.deleteProfileById(id));
  };

  return (
    <div className={style.main}>
      <NavLink to={`/profiles/${id}`}>
        <img
          className={style.profilePhoto}
          src={avatar}
          alt="ava-img"
        />
      </NavLink>
      <div className={style.nameAndMessage}>
        <div>{`${firstName} ${lastName}`}</div>
        <button type="submit">Send Message</button>
      </div>
      <div className={style.quickMenu}>
        <button type="submit">Quick Menu</button>
      </div>
      <div className={style.deleteButton}>
        <button type="button" onClick={deleteProfileById}>
          Delete
        </button>
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
