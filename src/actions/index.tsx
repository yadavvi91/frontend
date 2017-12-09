import * as constants from '../constants/index';
import {AddUserAction, AddUsersAction, ListUsersAction, RemoveUsersAction, User} from '../types';

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