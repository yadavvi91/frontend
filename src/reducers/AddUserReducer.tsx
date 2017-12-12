import { ADD_USER} from '../constants';
import { AddingUserActions, AddUserState } from '../types';

const initialState = {
};

export const addUser = (state: AddUserState = initialState, action: AddingUserActions): AddUserState => {
  switch (action.type) {
    case ADD_USER:
      return state;
    default:
      return state;
  }
};
