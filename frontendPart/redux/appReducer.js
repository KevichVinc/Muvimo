import * as types from './actionTypes';

const initialState = {
  profiles: [],
  addPost: {
    currentInput: '',
  },
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
    default:
      return state;
  }
}
