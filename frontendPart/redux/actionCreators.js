import * as types from './actionTypes';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const currentInputValue = (inputValue) => {
  return {
    type: types.CURRENT_INPUT_VALUE,
    text: inputValue,
  };
};
export const currentFormFilter = (inputValue, id) => {
  if (id === 'age') {
    return {
      type: types.CURRENT_FORM_AGE,
      inputValue,
    };
  } else if (id === 'firstName') {
    return {
      type: types.CURRENT_FORM_FIRST_NAME,
      inputValue,
    };
  } else if (id === 'lastName') {
    return {
      type: types.CURRENT_FORM_LAST_NAME,
      inputValue,
    };
  } else if (id === 'city') {
    return {
      type: types.CURRENT_FORM_CITY,
      inputValue,
    };
  } else if (id === 'skills') {
    return {
      type: types.CURRENT_FORM_SKILLS,
      inputValue,
    };
  } else if (id === 'favorites') {
    return {
      type: types.CURRENT_FORM_FAVORITES,
      inputValue,
    };
  } else if (id === 'img') {
    return {
      type: types.CURRENT_FORM_IMG,
      inputValue,
    };
  } else if (id === 'find') {
    return {
      type: types.CURRENT_INPUT_FIND,
      inputValue,
    };
  }
};
export const onLoading = () => {
  return async (dispatch) => {
    const json = await axios.get('api/profiles');
    dispatch(loadProfilesFromDb(json.data.profiles));
  };
};
export const findProfileById = (profileId) => {
  return async (dispatch) => {
    const json = await axios.post('api/profiles/find', { profileId });
    dispatch(profileToEdit(json.data.profileToEdit));
  };
};
export const profileToEdit = (profileToEdit) => {
  return {
    type: types.PROFILE_TO_EDIT,
    result: profileToEdit,
  };
};
export const loadProfilesFromDb = (loadedProfiles) => {
  return {
    type: types.LOAD_PROFILES,
    result: loadedProfiles,
  };
};

export const deleteThisProfile = (profileId) => {
  return async (dispatch) => {
    await axios.post('api/profiles/delete', {
      profileId,
    });
    dispatch(onLoading());
  };
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
