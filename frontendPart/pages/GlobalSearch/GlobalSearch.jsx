import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { getSearch } from '../../redux/selectors/profiles';
import debounce from '../../utilites/debounce/debounce';
import FriendRow from '../Profiles/FriendRow';
import style from './GlobalSearch.module.css';

import * as appAC from '../../redux/actionCreators/profiles';

export default function GlobalSearch() {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);
  const profiles = useSelector((state) => state.profiles);
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(history.location.search);
    dispatch(appAC.updateSearch(parsed.firstName));
    dispatch(appAC.findByFirstName(parsed));
  }, []);

  useEffect(() => {
    history.push({
      pathname: '/find',
      search: `?firstName=${search}`,
    });
    dispatch(appAC.findByFirstName(history.location.search));
  }, [search]);

  const updateFirstName = (e) => {
    dispatch(appAC.updateSearch(e.target.value));
  };

  const debounced = debounce((e) => updateFirstName(e), 600);

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
