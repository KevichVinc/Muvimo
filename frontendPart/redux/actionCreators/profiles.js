import axios from 'axios';
import * as types from '../actionTypes';
import store from '../store';

export const profileNotValid = (status) => ({
  type: types.PROFILE_STATUS,
  status,
});
export const clearProfileState = (status) => ({
  type: types.PROFILE_CLEARED,
  status,
});

function validateProfile(profile) {
  if (
    profile.firstName.length >= 2 &&
    profile.firstName.length <= 15
  ) {
    for (let i = 0; i < profile.firstName.length; i += 1) {
      const invalidSymbols = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '<',
        '?',
        '>',
        '/',
        '+',
        '.',
        '*',
        '"',
        '~',
        '=',
        ':',
        ';',
        '_',
        ')',
        '(',
        '$',
        '#',
        '№',
      ];
      for (let g = 0; g < invalidSymbols.length; g += 1) {
        if (profile.firstName[i] === invalidSymbols[g]) {
          return 'error';
        }
      }
    }
    return 'ok';
  }
  return 'error';
}

export const updatePost = (post) => ({
  type: types.UPDATE_POST,
  post,
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

export function updateAge(age) {
  if (age.length <= 2 && age > 0) {
    const status = { type: types.UPDATE_AGE, age };
    return status;
  }
  const error = {
    type: types.PROFILE_STATUS,
    status: 'error in age input',
  };
  return error;
}

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
export const findByFirstName = (firstName) => async (dispatch) => {
  try {
    const json = await axios.get(`/api/profiles/find/${firstName}`);
    dispatch(setProfiles(json.data.profiles));
  } catch {
    throw new Error('Ошибка при глобальном поиске');
  }
};

export const profileDeleted = () => ({
  type: types.PROFILE_DELETED,
  status: 'profile deleted',
});

export const deleteProfileById = (id) => async (dispatch) => {
  try {
    await axios.delete(`api/profiles/delete/${id}`);
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
  type: types.PROFILE_STATUS,
  status: 'profile created',
});

export const createProfile = (profile) => async (dispatch) => {
  const validation = validateProfile(profile, dispatch);
  if (validation === 'ok') {
    try {
      await axios.post('/api/profiles/new', {
        profile,
      });
      dispatch(profileCreated());
      return 'ok';
    } catch {
      throw new Error('Профайл не был создан');
    }
  }
  dispatch(profileNotValid('record failed: form not valid'));
  return 'validation error';
};

export const profileEdited = () => ({
  type: types.PROFILE_EDITED,
  status: 'profile edited',
});

export const editProfile = (profile) => async (dispatch) => {
  const validation = validateProfile(profile);
  if (validation === 'ok') {
    try {
      await axios.post('api/profiles/edit', {
        profile,
      });
      dispatch(profileEdited());
      return 'ok';
    } catch {
      throw new Error('Ошибка при редактировании профиля');
    }
  }
  dispatch(profileNotValid('edit failed: form not valid'));
  return 'validation error';
};
