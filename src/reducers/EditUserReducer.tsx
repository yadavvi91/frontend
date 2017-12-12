import { EditingUserActions, EditUserState } from '../types';
import {
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED,
  EDIT_USER
} from '../constants';

const initialState = {
};

export const editUser = (state: EditUserState = initialState, action: EditingUserActions): EditUserState => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        editUser: action.user
      };
    case FIRST_NAME_CHANGED:
      return state.editUser === undefined ? state : {
        ...state,
        editUser: {
          ...state.editUser,
          firstName: action.firstName
        }
      };
    case LAST_NAME_CHANGED:
      return state.editUser === undefined ? state : {
        ...state,
        editUser: {
          ...state.editUser,
          lastName: action.lastName
        }
      };
    case EMAIL_CHANGED:
      return state.editUser === undefined ? state : {
        ...state,
        editUser: {
          ...state.editUser,
          email: action.email
        }
      };
    case PHONE_NUMBER_CHANGED:
      return state.editUser === undefined ? state : {
        ...state,
        editUser: {
          ...state.editUser,
          phone: action.phone
        }
      };
    case ROLE_NAME_CHANGED:
      return state.editUser === undefined ? state : {
        ...state,
        editUser: {
          ...state.editUser,
          role: action.role
        }
      };
    default:
      return state;
  }
};
