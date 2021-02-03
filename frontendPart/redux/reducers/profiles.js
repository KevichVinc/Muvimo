import * as types from '../actionTypes';

const initialState = {
  profiles: [],
  profile: {
    firstName: '',
    lastName: '',
    friends: [],
    city: '',
    skills: [],
    favorites: [],
    age: '',
    avatar: '',
  },
  post: '',
  status: '',
  search: '',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_POST:
      return {
        ...state,
        post: action.post,
      };
    case types.UPDATE_AVATAR:
      return {
        ...state,
        profile: {
          ...state.profile,
          avatar: action.avatar,
        },
      };
    case types.UPDATE_FIRSTNAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          firstName: action.firstName,
        },
      };
    case types.UPDATE_LASTNAME:
      return {
        ...state,
        profile: {
          ...state.profile,
          lastName: action.lastName,
        },
      };
    case types.UPDATE_AGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          age: action.age,
        },
      };
    case types.UPDATE_CITY:
      return {
        ...state,
        profile: {
          ...state.profile,
          city: action.city,
        },
      };
    case types.UPDATE_SKILLS:
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: action.skills,
        },
      };
    case types.UPDATE_FAVORITES:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorites: action.favorites,
        },
      };
    case types.UPDATE_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case types.SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles,
      };
    case types.SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case types.PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case types.PROFILE_CLEARED:
      return {
        ...state,
        profile: {
          firstName: '',
          lastName: '',
          friends: [],
          city: '',
          skills: [],
          favorites: [],
          age: '',
          avatar: '',
        },
        status: action.status,
      };
    case types.PROFILE_DELETED:
      return {
        ...state,
        status: action.status,
      };
    case types.PROFILE_EDITED:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}
