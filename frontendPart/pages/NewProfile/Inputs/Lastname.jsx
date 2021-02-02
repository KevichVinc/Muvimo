import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Lastname() {
  const dispatch = useDispatch();
  const lastName = useSelector((state) => state.profile.lastName);

  const updateLastName = (e) =>
    dispatch(appAC.updateLastName(e.target.value));
  return (
    <div>
      Last name:
      <input
        type="text"
        placeholder="Enter your Lasttname"
        value={lastName}
        onChange={updateLastName}
      />
    </div>
  );
}
