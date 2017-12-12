import {
  ADD_USER,
  EMAIL_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED
} from '../constants';
import { AddingUserActions, AddUserState } from '../types';

const initialState = {
};

export const addUser = (state: AddUserState = initialState, action: AddingUserActions): AddUserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        addUser: action.user
      };
    case FIRST_NAME_CHANGED:
      return state.addUser === undefined ? state : {
        ...state,
        addUser: {
          ...state.addUser,
          firstName: action.firstName
        }
      };
    case LAST_NAME_CHANGED:
      return state.addUser === undefined ? state : {
        ...state,
        addUser: {
          ...state.addUser,
          lastName: action.lastName
        }
      };
    case EMAIL_CHANGED:
      return state.addUser === undefined ? state : {
        ...state,
        addUser: {
          ...state.addUser,
          email: action.email
        }
      };
    case PHONE_NUMBER_CHANGED:
      return state.addUser === undefined ? state : {
        ...state,
        addUser: {
          ...state.addUser,
          phone: action.phone
        }
      };
    case ROLE_NAME_CHANGED:
      return state.addUser === undefined ? state : {
        ...state,
        addUser: {
          ...state.addUser,
          role: action.role
        }
      };    default:
      return state;
  }
};
