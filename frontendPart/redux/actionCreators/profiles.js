import axios from 'axios';
import * as types from '../actionTypes';
import store from '../store';

export const currentInputValue = (inputValue) => ({
  type: types.CURRENT_INPUT_VALUE,
  text: inputValue,
});

export const updateAvatar = (avatar) => ({
  type: types.UPDATE_AVATAR,
  avatar,
});

export const updateFirstName = (firstName) => ({
  type: types.UPDATE_FIRSTNAME,
  firstName,
});

export const updateLastName = (lastName) => ({
  type: types.UPDATE_LASTNAME,
  lastName,
});

export const updateAge = (age) => ({
  type: types.UPDATE_AGE,
  age,
});
export const updateCity = (city) => ({
  type: types.UPDATE_CITY,
  city,
});

export const updateSkills = (skills) => ({
  type: types.UPDATE_SKILLS,
  skills,
});

export const updateFavorites = (favorites) => ({
  type: types.UPDATE_FAVORITES,
  favorites,
});

export const setProfiles = (profiles) => ({
  type: types.SET_PROFILES,
  profiles,
});

export const setProfile = (profile) => ({
  type: types.SET_PROFILE,
  profile,
});

export const updateSearch = (search) => ({
  type: types.UPDATE_SEARCH,
  search,
});
export const filterProfiles = (search) => (dispatch) => {
  const profiles = store
    .getState()
    .profiles.filter((profile) => profile.firstName === search);
  dispatch(setProfiles(profiles));
};

export const loadProfiles = () => async (dispatch) => {
  try {
    const json = await axios.get('/api/profiles');
    dispatch(setProfiles(json.data.profiles));
  } catch {
    throw new Error('Ошибка при загрузке профилей');
  }
};

export const findProfileById = (id) => async (dispatch) => {
  try {
    const json = await axios.get(`/api/profiles/${id}`);
    dispatch(setProfile(json.data.profile));
  } catch {
    throw new Error('Ошибка при загрузке профиля');
  }
};

export const profileDeleted = () => ({
  type: types.PROFILE_DELETED,
  result: 'profile deleted',
});

export const deleteProfileById = (id) => async (dispatch) => {
  try {
    await axios.delete('api/profiles/delete', { id });
    const profiles = store
      .getState()
      .profiles.filter((profile) => profile.id !== id);
    dispatch(setProfiles(profiles));
    dispatch(profileDeleted());
  } catch {
    throw new Error('Ошибка при удалении профиля');
  }
};

export const profileCreated = () => ({
  type: types.PROFILE_CREATED,
  result: 'profile created',
});

export const createProfile = (profile) => async (dispatch) => {
  try {
    await axios.post('/api/profiles/new', {
      profile,
    });
    dispatch(profileCreated());
  } catch {
    throw new Error('Профайл не был создан');
  }
};

export const profileEdited = () => ({
  type: types.PROFILE_EDITED,
  result: 'profile edited',
});

export const editProfile = (profile) => async (dispatch) => {
  try {
    await axios.post('api/profiles/edit', {
      profile,
    });
    dispatch(profileEdited());
  } catch {
    throw new Error('Ошибка при редактировании профиля');
  }
};
