import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalSearch } from '../../redux/selectors/profiles';
import FriendRow from './FriendRow';
import style from './Profiles.module.css';

import * as appAC from '../../redux/actionCreators/profiles';

export default function Profiles() {
  const dispatch = useDispatch();
  const search = useSelector(getLocalSearch);
  const profiles = useSelector((state) => state.profiles);
  useEffect(() => dispatch(appAC.loadProfiles()), []);

  const updateLocalSearch = (e) =>
    dispatch(appAC.updateLocalSearch(e.target.value));

  const preparedSearch = search.toLowerCase();
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.firstName.toLowerCase().indexOf(preparedSearch) !==
        -1 ||
      profile.lastName.toLowerCase().indexOf(preparedSearch) !== -1,
  );

  return (
    <div className={style.main}>
      <div className={style.search}>
        <div className={style.searchHeader}>Search:</div>
        <input
          className={style.searchField}
          type="text"
          placeholder="Who do you want to find?"
          value={search}
          onChange={updateLocalSearch}
        />
      </div>
      {filteredProfiles.map((profile) => (
        <FriendRow
          avatar={profile.avatar}
          firstName={profile.firstName}
          lastName={profile.lastName}
          id={profile.id}
          key={profile.id}
        />
      ))}
    </div>
  );
}
