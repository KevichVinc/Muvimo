import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendRow.module.css';

export default function FriendRow(props) {
  FriendRow.propTypes = {
    img: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  };
  const { img, firstName, lastName } = props;
  return (
    <div className={style.main}>
      <img className={style.profilePhoto} src={img} alt="ava" />
      <div className={style.nameAndMessage}>
        <div>{`${firstName} ${lastName}`}</div>
        <button type="submit">Send Message</button>
      </div>
      <div className={style.quickMenu}>
        <button type="submit">Quick Menu</button>
      </div>
    </div>
  );
}
