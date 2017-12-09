import * as constants from '../constants/index';

export interface ListUsersAction {
  type: constants.LIST_USERS;
}

export interface AddUsersAction {
  type: constants.LIST_USERS;
}

export type UsersAction = ListUsersAction | AddUsersAction;
