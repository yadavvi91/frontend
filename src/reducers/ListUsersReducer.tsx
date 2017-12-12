import { ListingUserActions, ListUsersState } from '../types';
import { ADD_USER, ADD_USERS, LIST_USERS, REMOVE_USERS } from '../constants';

const initialState = {
  'users': [
    {
      'id': 0,
      'firstName': 'Aniyah',
      'lastName': 'Luettgen',
      'phone': '861-332-5113',
      'email': 'Danika.Ryan84@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 1,
      'firstName': 'Alisa',
      'lastName': 'Pacocha',
      'phone': '085-056-3901',
      'email': 'Eusebio68@yahoo.com',
      'role': 'admin'
    }
  ]
};

export const listUsers = (state: ListUsersState = initialState, action: ListingUserActions): ListUsersState => {
  switch (action.type) {
    case LIST_USERS:
      return state;
    case ADD_USER:
      return {
        ...state,
        users: action.payload === undefined ? [...state.users] : [...state.users, action.payload]
      };
    case ADD_USERS:
      return {
        ...state,
        users: action.payload === undefined ? [...state.users] : [...state.users, ...action.payload]
      };
    case REMOVE_USERS:
      return {
        ...state,
        users: action.id === undefined ? [...state.users] : state.users.filter((user) => user.id !== action.id)
      };
    default:
      return state;
  }
};