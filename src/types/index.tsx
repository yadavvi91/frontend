import {
  ADD_USER,
  ADD_USERS,
  EDIT_USER,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  LIST_USERS,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED,
  SAVE_EDITED_USER,
  DELETE_USER,
  REMOVE_USERS
} from '../constants';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
}

interface StoreState {}

export interface ListUserState {
  users: Array<User>;
}

export interface EditUserState {
  editUser?: User;
}

export interface RootState extends StoreState {
  listUsersState: ListUserState;
  editUsersState: EditUserState;
}

export type ListUsersAction = {type: typeof LIST_USERS};
export type AddUserAction = {type: typeof ADD_USER, payload: User};
export type AddUsersAction = {type: typeof ADD_USERS, payload: Array<User>};
export type RemoveUsersAction = {type: typeof REMOVE_USERS, id: number, firstName?: string};
export type EditUserAction = {type: typeof EDIT_USER, id: number};

export type FirstNameChangedAction = {type: typeof FIRST_NAME_CHANGED, firstName: string};
export type LastNameChangedAction = {type: typeof LAST_NAME_CHANGED, lastName: string};
export type EmailChangedAction = {type: typeof EMAIL_CHANGED, email: string};
export type PhoneNumberChangedAction = {type: typeof PHONE_NUMBER_CHANGED, phone: string};
export type RoleNameChangedAction = {type: typeof ROLE_NAME_CHANGED, role: string};
export type SaveEditedUserAction = {type: typeof SAVE_EDITED_USER, id: number};
export type DeleteUserAction = {type: typeof DELETE_USER, id: number};

export type ListingUserActions = ListUsersAction
  | AddUserAction
  | AddUsersAction
  | RemoveUsersAction
  | EditUserAction;

export type EditingUserActions = FirstNameChangedAction
  | LastNameChangedAction
  | EmailChangedAction
  | PhoneNumberChangedAction
  | RoleNameChangedAction
  | SaveEditedUserAction
  | DeleteUserAction;
