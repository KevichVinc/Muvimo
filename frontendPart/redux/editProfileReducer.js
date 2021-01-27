import * as types from './actionTypes';

const initialState = {
  userEdit: {
    id: '',
    firstNameInput: '',
    lastNameInput: '',
    friendsInput: [],
    about: { cityInput: '', skillsInput: [], favoritesInput: [] },
    ageInput: '',
    imgInput: '',
  },
  currentProfileToEditInput: '',
  status: '',
};

export default function editProfileReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case types.PROFILE_TO_EDIT:
      return {
        ...state,
        userEdit: {
          id: action.result._id,
          firstNameInput: action.result.firstName,
          lastNameInput: action.result.lastName,
          friendsInput: [],
          about: {
            cityInput: action.result.about.city,
            skillsInput: action.result.about.skills,
            favoritesInput: action.result.about.favorites,
          },
          ageInput: action.result.age,
          imgInput: action.result.img,
        },
      };
    case types.CURRENT_EDIT_AGE:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          ageInput: action.inputValue,
        },
      };
    case types.CURRENT_EDIT_FIRST_NAME:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          firstNameInput: action.inputValue,
        },
      };
    case types.CURRENT_EDIT_LAST_NAME:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          lastNameInput: action.inputValue,
        },
      };
    case types.CURRENT_EDIT_CITY:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          about: {
            ...state.userEdit.about,
            cityInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_EDIT_SKILLS:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          about: {
            ...state.userEdit.about,
            skillsInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_EDIT_FAVORITES:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          about: {
            ...state.userEdit.about,
            favoritesInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_EDIT_IMG:
      return {
        ...state,
        userEdit: {
          ...state.userEdit,
          imgInput: action.inputValue,
        },
      };
    case types.CURRENT_INPUT_FIND:
      return {
        ...state,
        currentProfileToEditInput: action.inputValue,
      };
    case types.PROFILE_EDITED:
      return {
        ...state,
        status: action.result,
      };
    default:
      return state;
  }
}
