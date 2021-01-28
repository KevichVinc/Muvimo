import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Age() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.profile.age);

  const updateAge = (e) => dispatch(appAC.updateAge(e.target.value));
  return (
    <div>
      Age:
      <input
        type="text"
        placeholder="Enter your firstname"
        value={age}
        onChange={updateAge}
      />
    </div>
  );
}
