import { Actions, StoreState } from '../types';
import { ADD_USER, ADD_USERS, LIST_USERS, REMOVE_USERS } from '../constants';

export const listUsers = (state: StoreState, action: Actions): StoreState => {
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
