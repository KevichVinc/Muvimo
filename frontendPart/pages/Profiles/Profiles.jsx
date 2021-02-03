import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../redux/selectors/profiles';
import FriendRow from './FriendRow';
import style from './Profiles.module.css';

import * as appAC from '../../redux/actionCreators/profiles';

export default function Profiles() {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const profiles = useSelector((state) => state.profiles);
  useEffect(() => dispatch(appAC.loadProfiles()), []);

  const updateSearch = (e) =>
    dispatch(appAC.updateSearch(e.target.value));

  return (
    <div className={style.main}>
      <div className={style.search}>
        <div className={style.searchHeader}>Search:</div>
        <input
          className={style.searchField}
          type="text"
          placeholder="Who do you want to find?"
          value={search}
          onChange={updateSearch}
        />
      </div>
      {search === ''
        ? profiles.map((profile) => (
            <FriendRow
              avatar={profile.avatar}
              firstName={profile.firstName}
              lastName={profile.lastName}
              id={profile.id}
              key={profile.id}
            />
          ))
        : profiles.map((profile) =>
            profile.firstName === search ? (
              <FriendRow
                avatar={profile.avatar}
                firstName={profile.firstName}
                lastName={profile.lastName}
                id={profile.id}
                key={profile.id}
              />
            ) : (
              <div />
            ),
          )}
    </div>
  );
}
