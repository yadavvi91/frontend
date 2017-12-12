import * as constants from '../constants/index';
import {
  AddUserAction,
  AddUsersAction,
  DeleteUserAction,
  ListUsersAction,
  RemoveUsersAction,
  SaveEditedUser,
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

export function saveEditedUser(id: number): SaveEditedUser {
  return {
    type: constants.SAVE_EDITED_USER,
    id
  };
}

export function deleteUser(id: number): DeleteUserAction {
  return {
    type: constants.DELETE_USER,
    id
  };
}
