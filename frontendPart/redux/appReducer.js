import * as types from './actionTypes';

const initialState = {
  profiles: [],
  newUserForm: {
    firstNameInput: '',
    lastNameInput: '',
    friendsInput: [],
    about: { cityInput: '', skillsInput: [], favoritesInput: [] },
    ageInput: '',
    imgInput: '',
  },
  addPost: {
    currentInput: '',
  },
  result: '',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.CURRENT_INPUT_VALUE:
      return {
        ...state,
        addPost: { currentInput: action.text },
      };
    case types.LOAD_PROFILES:
      return {
        ...state,
        profiles: action.result,
      };
    case types.CURRENT_FORM_AGE:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          ageInput: action.inputValue,
        },
      };
    case types.CURRENT_FORM_FIRST_NAME:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          firstNameInput: action.inputValue,
        },
      };
    case types.CURRENT_FORM_LAST_NAME:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          lastNameInput: action.inputValue,
        },
      };
    case types.CURRENT_FORM_CITY:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          about: {
            ...state.newUserForm.about,
            cityInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_FORM_SKILLS:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          about: {
            ...state.newUserForm.about,
            skillsInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_FORM_FAVORITES:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          about: {
            ...state.newUserForm.about,
            favoritesInput: action.inputValue,
          },
        },
      };
    case types.CURRENT_FORM_IMG:
      return {
        ...state,
        newUserForm: {
          ...state.newUserForm,
          about: {
            ...state.newUserForm.about,
            imgInput: action.inputValue,
          },
        },
      };
    case types.PROFILE_CREATED:
      return {
        ...state,
        result: action.result,
      };
    default:
      return state;
  }
}
