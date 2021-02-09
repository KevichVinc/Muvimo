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
      <div className={style.sectionFilterBar}>
        <div className={style.sectionFilterBarActions}>
          <div className={style.form}>
            <div className={style.formInputSmallWithButton}>
              <label
                className={style.searchLabel}
                htmlFor="friends-search"
              >
                Search
              </label>
              <input
                className={style.friendsSearch}
                type="text"
                value={search}
                onChange={updateLocalSearch}
                id="friends-search"
              />
            </div>
          </div>
        </div>
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
