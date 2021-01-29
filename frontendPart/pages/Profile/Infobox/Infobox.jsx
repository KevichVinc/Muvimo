import React from 'react';
import { useSelector } from 'react-redux';
import * as profileSelectors from '../../../redux/selectors/profiles';
import style from './Infobox.module.css';

export default function Infobox() {
  const firstName = useSelector(profileSelectors.getProfileFirstName);
  const lastName = useSelector(profileSelectors.getProfileLastName);
  const age = useSelector(profileSelectors.getProfileAge);
  const skills = useSelector(profileSelectors.getProfileSkills);
  const city = useSelector(profileSelectors.getProfileCity);
  const favorites = useSelector(profileSelectors.getProfileFavorites);
  console.log(skills);
  return (
    <div className={style.main}>
      <div className={style.fullname}>
        <div>{`${firstName} ${lastName}`}</div>
      </div>
      <div className={style.about}>
        <div>{age !== null ? `Age: ${age}` : 'Age: unknowen'}</div>
        <div>{city !== '' ? `City: ${city}` : 'City: unknowen'}</div>
        <div>
          {skills.length !== 0
            ? `Skills: ${skills}`
            : 'Skills: unknowen'}
        </div>
        <div>
          {favorites.length !== 0
            ? `Favorites: ${favorites}`
            : 'Favorites: unknowen'}
        </div>
      </div>
      <div className={style.counters}>
        <button type="submit">audioCounter</button>
        <button type="submit">photoCounter</button>
        <button type="submit">videoCounter</button>
        <button type="submit">projectsCounter</button>
      </div>
    </div>
  );
}
