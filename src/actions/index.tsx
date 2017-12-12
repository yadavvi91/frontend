import * as constants from '../constants/index';
import {
  AddUserAction,
  AddUsersAction,
  EditUserAction,
  FirstNameChangedAction,
  LastNameChangedAction,
  EmailChangedAction,
  PhoneNumberChangedAction,
  RoleNameChangedAction,
  SaveEditedUserAction,
  DeleteUserAction,
  ListUsersAction,
  RemoveUsersAction,
  User
} from '../types';

export function listUsers(): ListUsersAction {
  return {
    type: constants.LIST_USERS
  };
}

export function addUser(payload: User): AddUserAction {
  return {
    type: constants.ADD_USER,
    payload
  };
}

export function addUsers(payload: Array<User>): AddUsersAction {
  return {
    type: constants.ADD_USERS,
    payload
  };
}

export function removeFirstUser(id: number, firstName: string): RemoveUsersAction {
  return {
    type: constants.REMOVE_USERS,
    id,
    firstName
  };
}

export function editUser(user: User): EditUserAction {
  return {
    type: constants.EDIT_USER,
    user
  };
}

export function firstNameChanged(firstName: string): FirstNameChangedAction {
  return {
    type: constants.FIRST_NAME_CHANGED,
    firstName
  };
}

export function lastNameChanged(lastName: string): LastNameChangedAction {
  return {
    type: constants.LAST_NAME_CHANGED,
    lastName
  };
}

export function emailChanged(email: string): EmailChangedAction {
  return {
    type: constants.EMAIL_CHANGED,
    email
  };
}

export function phoneNumberChanged(phone: string): PhoneNumberChangedAction {
  return {
    type: constants.PHONE_NUMBER_CHANGED,
    phone
  };
}

export function roleNameChanged(role: string): RoleNameChangedAction {
  return {
    type: constants.ROLE_NAME_CHANGED,
    role
  };
}

export function saveEditedUser(user: User): SaveEditedUserAction {
  return {
    type: constants.SAVE_EDITED_USER,
    user
  };
}

export function deleteUser(user: User): DeleteUserAction {
  return {
    type: constants.DELETE_USER,
    user
  };
}
