import {
  ADD_USER,
  EDIT_USER,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  EMAIL_CHANGED,
  LIST_USERS,
  PHONE_NUMBER_CHANGED,
  ROLE_NAME_CHANGED,
  SAVE_EDITED_USER,
  DELETE_USER,
  REMOVE_USERS,
  SAVE_USER
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

export interface ListUsersState {
  users: Array<User>;
}

export interface EditUserState {
  editUser?: User;
}

export interface AddUserState {
  addUser?: User;
}

export interface RootState extends StoreState {
  listUsersState: ListUsersState;
  editUserState: EditUserState;
  addUserState: AddUserState;
}

export type ListUsersAction = {type: typeof LIST_USERS};
export type RemoveUsersAction = {type: typeof REMOVE_USERS, id: number, firstName?: string};
export type EditUserAction = {type: typeof EDIT_USER, user: User};
export type SaveEditedUserAction = {type: typeof SAVE_EDITED_USER, user: User};
export type DeleteUserAction = {type: typeof DELETE_USER, user: User};

export type FirstNameChangedAction = {type: typeof FIRST_NAME_CHANGED, firstName: string};
export type LastNameChangedAction = {type: typeof LAST_NAME_CHANGED, lastName: string};
export type EmailChangedAction = {type: typeof EMAIL_CHANGED, email: string};
export type PhoneNumberChangedAction = {type: typeof PHONE_NUMBER_CHANGED, phone: string};
export type RoleNameChangedAction = {type: typeof ROLE_NAME_CHANGED, role: string};

export type AddUserAction = {type: typeof ADD_USER, user: User};
export type SaveUserAction = {type: typeof SAVE_USER, user: User};

export type ListingUserActions = ListUsersAction
  | RemoveUsersAction
  | SaveEditedUserAction
  | DeleteUserAction
  | SaveUserAction;

export type EditingUserActions = EditUserAction
  | FirstNameChangedAction
  | LastNameChangedAction
  | EmailChangedAction
  | PhoneNumberChangedAction
  | RoleNameChangedAction;

export type AddingUserActions = AddUserAction
  | FirstNameChangedAction
  | LastNameChangedAction
  | EmailChangedAction
  | PhoneNumberChangedAction
  | RoleNameChangedAction;
