import {
  ADD_USER,
  ADD_USERS,
  DELETE_USER,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  LIST_USERS,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED,
  REMOVE_USERS,
  SAVE_EDITED_USER
} from '../constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
}

export interface ListUserState {
  users: Array<User>;
}

export interface EditUserState {
  editUser?: User;
}

export type ListUsersAction = {type: typeof LIST_USERS};
export type AddUserAction = {type: typeof ADD_USER, payload: User};
export type AddUsersAction = {type: typeof ADD_USERS, payload: Array<User>};
export type RemoveUsersAction = {type: typeof REMOVE_USERS, id: number, firstName?: string};
export type FirstNameChangedAction = {type: typeof FIRST_NAME_CHANGED, id: number};
export type LastNameChangedAction = {type: typeof LAST_NAME_CHANGED, id: number};
export type EmailChangedAction = {type: typeof EMAIL_CHANGED, id: number};
export type PhoneNumberChangedAction = {type: typeof PHONE_NUMBER_CHANGED, id: number};
export type RoleNameChangedAction = {type: typeof ROLE_NAME_CHANGED, id: number};
export type SaveEditedUserAction = {type: typeof SAVE_EDITED_USER, id: number};
export type DeleteUserAction = {type: typeof DELETE_USER, id: number};

export type ListingUserActions = ListUsersAction
  | AddUserAction
  | AddUsersAction
  | RemoveUsersAction;

export type EditingUserActions = FirstNameChangedAction
  | LastNameChangedAction
  | EmailChangedAction
  | PhoneNumberChangedAction
  | RoleNameChangedAction
  | SaveEditedUserAction
  | DeleteUserAction;
