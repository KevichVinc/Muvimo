import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as appAC from '../../redux/editProfileCreator';
import style from './EditUserForm.module.css';

export default function EditUserForm() {
  const dispatch = useDispatch();
  const currentUserForm = useSelector(
    (state) => state.editProfile.userEdit,
  );
  const profileToFind = useSelector(
    (state) => state.editProfile.currentProfileToEditInput,
  );

  const currentInput = (e) =>
    dispatch(appAC.currentFormFilter(e.target.value, e.target.id));

  const addNewProfile = (e) => {
    e.preventDefault();
    dispatch(appAC.createNewProfile(currentUserForm));
  };
  const findProfile = (e) => {
    e.preventDefault();
    dispatch(appAC.findProfileById(profileToFind));
  };

  return (
    <div className={style.main}>
      <input
        id="find"
        type="text"
        placeholder="Введите id"
        value={profileToFind}
        onChange={currentInput}
      />
      <button type="button" onClick={findProfile}>
        Найти по id
      </button>
      <form type="submit" onSubmit={addNewProfile}>
        <div>
          First name:
          <input
            id="firstName"
            type="text"
            placeholder="Enter your firstname"
            value={currentUserForm.firstNameInput}
            onChange={currentInput}
          />
        </div>
        <div>
          Last name:
          <input
            id="lastName"
            type="text"
            placeholder="Enter your lastname"
            value={currentUserForm.lastNameInput}
            onChange={currentInput}
          />
        </div>
        <div>
          Age:
          <input
            id="age"
            type="number"
            placeholder="Enter your age"
            value={currentUserForm.ageInput}
            onChange={currentInput}
          />
        </div>
        <div>
          City:
          <input
            id="city"
            type="text"
            placeholder="Where do you live"
            value={currentUserForm.about.cityInput}
            onChange={currentInput}
          />
        </div>
        <div>
          Skills:
          <input
            id="skills"
            type="text"
            placeholder="Lets see what you can do"
            value={currentUserForm.about.skillsInput}
            onChange={currentInput}
          />
        </div>
        <div>
          Favorites:
          <input
            id="favorites"
            type="text"
            placeholder="What do you love"
            value={currentUserForm.about.favoritesInput}
            onChange={currentInput}
          />
        </div>
        <div>
          Image:
          <input
            id="img"
            type="text"
            placeholder="url link"
            value={currentUserForm.imgInput}
            onChange={currentInput}
          />
        </div>
        <button type="submit">Safe edited profile</button>
      </form>
    </div>
  );
}
