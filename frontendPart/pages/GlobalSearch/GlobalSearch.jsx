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
    if (parsed.firstName.length !== 0) {
      dispatch(appAC.findByFirstName(history.location.search));
    }
  }, []);

  useEffect(() => {
    if (search.length !== 0) {
      history.push({
        pathname: '/find',
        search: `?firstName=${search}`,
      });
      dispatch(appAC.findByFirstName(history.location.search));
    }
  }, [search]);

  const updateFirstName = (e) => {
    dispatch(appAC.updateSearch(e.target.value));
  };

  const debounced = debounce((e) => updateFirstName(e), 600);

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
                Global Search
              </label>
              <input
                className={style.friendsSearch}
                type="text"
                onChange={debounced}
              />
            </div>
          </div>
        </div>
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
