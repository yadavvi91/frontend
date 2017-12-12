import { EditingUserActions, EditUserState } from '../types';
import {
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED,
  SAVE_EDITED_USER,
  DELETE_USER
} from '../constants';

export const editUsers = (state: EditUserState, action: EditingUserActions): EditUserState => {
  switch (action.type) {
    case FIRST_NAME_CHANGED:
      return state;
    case LAST_NAME_CHANGED:
      return state;
    case EMAIL_CHANGED:
      return state;
    case PHONE_NUMBER_CHANGED:
      return state;
    case ROLE_NAME_CHANGED:
      return state;
    case SAVE_EDITED_USER:
      return state;
    case DELETE_USER:
      return state;
    default:
      return state;
  }
};
