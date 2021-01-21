import * as types from './actionTypes';

export const currentInputValue = (inputValue) => {
  return {
    type: types.CURRENT_INPUT_VALUE,
    text: inputValue,
  };
};
export const loadProfilesFromDb = (jsonState) => {
  return {
    type: types.LOAD_PROFILES,
    result: jsonState,
  };
};
