import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from '../../redux/selectors/profiles';
import debounce from '../../utilites/debounce/debounce';
import FriendRow from '../Profiles/FriendRow';
import style from './GlobalSearch.module.css';

import * as appAC from '../../redux/actionCreators/profiles';

export default function GlobalSearch() {
  const dispatch = useDispatch();
  // const params = useParams();
  const firstName = useSelector(getSearch);
  const profiles = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(appAC.findByFirstName(firstName));
  }, [firstName]);

  const updateFirstName = (e) => {
    dispatch(appAC.updateSearch(e.target.value));
  };

  const debounced = debounce((e) => updateFirstName(e), 300);

  return (
    <div className={style.main}>
      <div className={style.search}>
        <div className={style.searchHeader}>Glodal Search:</div>
        <input
          className={style.searchField}
          type="text"
          placeholder="Find By First Name"
          onChange={debounced}
        />
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
