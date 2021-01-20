import * as types from './actionTypes';

const initialState = {
  profiles: [
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Ninja',
      lastName: 'Ninjevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Suka',
      lastName: 'Sukevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Danil',
      lastName: 'Danilevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Popka',
      lastName: 'Popkevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Jopa',
      lastName: 'Jopevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Siska',
      lastName: 'Siskevich',
    },
    {
      img:
        'https://icon-library.com/images/icon-avatar/icon-avatar-16.jpg',
      firstName: 'Chleno',
      lastName: 'Chlenevich',
    },
  ],
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
