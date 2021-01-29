import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../../redux/actionCreators/profiles';

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.profile.favorites);

  const updateFavorites = (e) =>
    dispatch(appAC.updateFavorites(e.target.value));

  return (
    <div>
      Favorites:
      <input
        type="text"
        placeholder="Enter your firstname"
        value={favorites}
        onChange={updateFavorites}
      />
    </div>
  );
}
