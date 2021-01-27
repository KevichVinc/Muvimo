import axios from 'axios';
import * as types from './actionTypes';

export const currentFormFilter = (inputValue, id) => {
  if (id === 'age') {
    return {
      type: types.CURRENT_EDIT_AGE,
      inputValue,
    };
  }
  if (id === 'firstName') {
    return {
      type: types.CURRENT_EDIT_FIRST_NAME,
      inputValue,
    };
  }
  if (id === 'lastName') {
    return {
      type: types.CURRENT_EDIT_LAST_NAME,
      inputValue,
    };
  }
  if (id === 'city') {
    return {
      type: types.CURRENT_EDIT_CITY,
      inputValue,
    };
  }
  if (id === 'skills') {
    return {
      type: types.CURRENT_EDIT_SKILLS,
      inputValue,
    };
  }
  if (id === 'favorites') {
    return {
      type: types.CURRENT_EDIT_FAVORITES,
      inputValue,
    };
  }
  if (id === 'img') {
    return {
      type: types.CURRENT_EDIT_IMG,
      inputValue,
    };
  }
  if (id === 'find') {
    return {
      type: types.CURRENT_INPUT_FIND,
      inputValue,
    };
  }

  return 'default';
};

export const profileToEdit = (profileForState) => ({
  type: types.PROFILE_TO_EDIT,
  result: profileForState,
});

export const findProfileById = (profileId) => async (dispatch) => {
  const json = await axios.post('api/profiles/find', { profileId });
  dispatch(profileToEdit(json.data.profileToEdit));
};

export const createNewProfile = (currentUserForm) => {
  (async () => {
    try {
      await axios.post('/api/profiles/edit', {
        currentUserForm,
      });
      alert('Профайл отредактирован');
    } catch {
      alert('редактирование не произошло');
    }
  })();
  return {
    type: types.PROFILE_EDITED,
    result: 'edited',
  };
};
