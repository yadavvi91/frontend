import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddUserAction, AddUsersAction, RemoveUsersAction, StoreState, User } from '../types';
import ListUsers from '../components/ListUsers';
import { addUser, addUsers, removeFirstUser } from '../actions';

export interface ListUsersProps {
  users: Array<User>;
}

export interface DispatchProps {
  addUser(user: User): AddUserAction;
  addUsers(users: Array<User>): AddUsersAction;
  removeFirstUser(id: number, firstName: string): RemoveUsersAction;
}

export const mapStateToProps = (state: StoreState): ListUsersProps => {
  return {
    users: state.users
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    addUser: (user: User) => dispatch(addUser(user)),
    addUsers: (users: Array<User>) => dispatch(addUsers(users)),
    removeFirstUser: (id: number, firstName: string) => dispatch(removeFirstUser(id, firstName)),
  };
};

export default withRouter(connect<ListUsersProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListUsers));
