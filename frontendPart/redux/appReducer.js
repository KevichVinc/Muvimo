import * as types from './actionTypes';

const initialState = {
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
    default:
      return state;
  }
}
