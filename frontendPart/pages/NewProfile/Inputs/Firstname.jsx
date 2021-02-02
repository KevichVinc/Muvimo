import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Firstname() {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.profile.firstName);

  const updateFirstName = (e) =>
    dispatch(appAC.updateFirstName(e.target.value));
  return (
    <div>
      First name:
      <input
        type="text"
        placeholder="Enter your Firstname"
        value={firstName}
        onChange={updateFirstName}
      />
    </div>
  );
}
