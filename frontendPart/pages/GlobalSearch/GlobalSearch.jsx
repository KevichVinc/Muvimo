import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../redux/selectors/profiles';
import FriendRow from '../Profiles/FriendRow';
import style from './GlobalSearch.module.css';

import * as appAC from '../../redux/actionCreators/profiles';

export default function GlobalSearch() {
  const dispatch = useDispatch();
  const params = useParams();
  const firstName = useSelector(getSearch);
  const profiles = useSelector((state) => state.profiles);
  useEffect(
    () =>
      params.firstName === undefined
        ? dispatch(appAC.setProfiles([]))
        : dispatch(appAC.findByFirstName(params.firstName)),
    [params],
  );

  const updateSearch = (e) =>
    dispatch(appAC.updateSearch(e.target.value));

  return (
    <div className={style.main}>
      <div className={style.search}>
        <div className={style.searchHeader}>Glodal Search:</div>
        <input
          className={style.searchField}
          type="text"
          placeholder="Find By First Name"
          value={firstName}
          onChange={updateSearch}
        />
        <NavLink
          className={style.findButton}
          to={`/find/${firstName}`}
        >
          <button type="button">GLOBAL FIND</button>
        </NavLink>
      </div>
      {profiles.map((profile) => (
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
