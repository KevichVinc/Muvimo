import axios from 'axios';
import * as types from './actionTypes';

export const currentInputValue = (inputValue) => ({
  type: types.CURRENT_INPUT_VALUE,
  text: inputValue,
});

export const currentFormFilter = (inputValue, id) => {
  if (id === 'age') {
    return {
      type: types.CURRENT_FORM_AGE,
      inputValue,
    };
  }
  if (id === 'firstName') {
    return {
      type: types.CURRENT_FORM_FIRST_NAME,
      inputValue,
    };
  }
  if (id === 'lastName') {
    return {
      type: types.CURRENT_FORM_LAST_NAME,
      inputValue,
    };
  }
  if (id === 'city') {
    return {
      type: types.CURRENT_FORM_CITY,
      inputValue,
    };
  }
  if (id === 'skills') {
    return {
      type: types.CURRENT_FORM_SKILLS,
      inputValue,
    };
  }
  if (id === 'favorites') {
    return {
      type: types.CURRENT_FORM_FAVORITES,
      inputValue,
    };
  }
  if (id === 'img') {
    return {
      type: types.CURRENT_FORM_IMG,
      inputValue,
    };
  }
  if (id === 'find') {
    return {
      type: types.CURRENT_INPUT_FIND,
      inputValue,
    };
  }
  return 'reesult';
};
export const loadProfilesFromDb = (loadedProfiles) => ({
  type: types.LOAD_PROFILES,
  result: loadedProfiles,
});

export const profileToEdit = (profile) => ({
  type: types.PROFILE_TO_EDIT,
  result: profile,
});

export const onLoading = () => async (dispatch) => {
  const json = await axios.get('api/profiles');
  dispatch(loadProfilesFromDb(json.data.profiles));
};

export const findProfileById = (profileId) => async (dispatch) => {
  const json = await axios.post('api/profiles/find', { profileId });
  dispatch(profileToEdit(json.data.profileToEdit));
};

export const deleteThisProfile = (profileId) => async (dispatch) => {
  await axios.post('api/profiles/delete', {
    profileId,
  });
  dispatch(onLoading());
};

export const createNewProfile = (currentUserForm) => {
  (async () => {
    try {
      await axios.post('/api/profiles/new', {
        currentUserForm,
      });
      alert('Профайл создан');
    } catch {
      alert('not saved bro');
    }
  })();
  return {
    type: types.PROFILE_CREATED,
    result: 'created',
  };
};
