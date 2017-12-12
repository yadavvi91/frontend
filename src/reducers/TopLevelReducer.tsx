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
      return state;
    default:
      return state;
  }
};
