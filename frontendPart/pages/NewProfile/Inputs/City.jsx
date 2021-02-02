import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function City() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.profile.city);

  const updateCity = (e) =>
    dispatch(appAC.updateCity(e.target.value));
  return (
    <div>
      City:
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={updateCity}
      />
    </div>
  );
}
