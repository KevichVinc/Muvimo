import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Avatar() {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.profile.avatar);

  const updateAvatar = (e) =>
    dispatch(appAC.updateAvatar(e.target.value));

  return (
    <div>
      <div>Avatar:</div>
      <input
        type="text"
        placeholder="Add URL link"
        value={avatar}
        onChange={updateAvatar}
      />
    </div>
  );
}
