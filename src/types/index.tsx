import { ADD_USER, ADD_USERS, DELETE_USER, LIST_USERS, REMOVE_USERS, SAVE_EDITED_USER } from '../constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
}

export interface StoreState {
  users: Array<User>;
}

export type ListUsersAction = {type: typeof LIST_USERS};
export type AddUserAction = {type: typeof ADD_USER, payload: User};
export type AddUsersAction = {type: typeof ADD_USERS, payload: Array<User>};
export type RemoveUsersAction = {type: typeof REMOVE_USERS, id: number, firstName?: string};
export type SaveEditedUser = {type: typeof SAVE_EDITED_USER, id: number};
export type DeleteUserAction = {type: typeof DELETE_USER, id: number};

export type Actions = ListUsersAction
  | AddUserAction
  | AddUsersAction
  | RemoveUsersAction
  | SaveEditedUser
  | DeleteUserAction;
