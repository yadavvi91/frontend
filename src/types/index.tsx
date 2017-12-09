import { ADD_USER, ADD_USERS, LIST_USERS, REMOVE_USERS } from '../constants';

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

export type Actions = ListUsersAction | AddUserAction | AddUsersAction | RemoveUsersAction;
