import { connect, Dispatch } from 'react-redux';
import { AddUserAction, AddUsersAction, StoreState, User } from '../types';
import ListUsers from '../components/ListUsers';
import { addUser, addUsers } from '../actions';

export interface ListUsersProps {
  users: Array<User>;
}

export interface DispatchProps {
  addUser(user: User): AddUserAction;
  addUsers(users: Array<User>): AddUsersAction;
}

export const mapStateToProps = (state: StoreState): ListUsersProps => {
  return {
    users: state.users
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    addUser: (user: User) => dispatch(addUser(user)),
    addUsers: (users: Array<User>) => dispatch(addUsers(users))
  };
};

export default connect<ListUsersProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListUsers);
