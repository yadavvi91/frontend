import { StoreState } from '../types';
import { UsersAction } from '../actions';
import { LIST_USERS } from '../constants';

export const listUsers = (state: StoreState, action: UsersAction): StoreState => {
  switch (action.type) {
    case LIST_USERS:
      return state;
    default:
      return state;
  }
};