import {
  RootState,
  TopLevelReducerActions
} from '../types';
import { EDIT_USER } from '../constants';

const initialState = {
  listUsersState: {
    'users': [
      {
        'id': 0,
        'firstName': 'Aniyah',
        'lastName': 'Luettgen',
        'phone': '861-332-5113',
        'email': 'Danika.Ryan84@yahoo.com',
        'role': 'admin'
      },
      {
        'id': 1,
        'firstName': 'Alisa',
        'lastName': 'Pacocha',
        'phone': '085-056-3901',
        'email': 'Eusebio68@yahoo.com',
        'role': 'admin'
      }
    ]
  },
  editUsersState: {

  }
};

export const topLevelReducer = (state: RootState = initialState, action: TopLevelReducerActions): RootState => {
  switch (action.type) {
    case EDIT_USER:
      const newState = {
        ...state,
        editUsersState: {
          ...state.editUsersState,
          editUser: state.listUsersState.users.filter((user) => (user.id === action.id))[0]
        }
      };
      return newState;
    default:
      return state;
  }
};
