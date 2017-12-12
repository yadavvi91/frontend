import { connect, Dispatch } from 'react-redux';
import { AddUserAction, AddUsersAction, RemoveUsersAction, User, RootState, EditUserAction } from '../types';
import ListUsers from '../components/ListUsers';
import { addUser, addUsers, editUser, removeFirstUser } from '../actions';
import { RouteComponentProps } from 'react-router-dom';

type OwnProps = RouteComponentProps<{}>;

export interface ListUsersProps {
  routerProps: OwnProps;
  users: Array<User>;
}

export interface DispatchProps {
  addUser(user: User): AddUserAction;
  addUsers(users: Array<User>): AddUsersAction;
  removeFirstUser(id: number, firstName: string): RemoveUsersAction;
  editUser(id: number): EditUserAction;
}

export const mapStateToProps = (state: RootState, ownProps: OwnProps): ListUsersProps => {
  return {
    routerProps: ownProps,
    users: state.listUsersState.users
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
  return {
    addUser: (user: User) => dispatch(addUser(user)),
    addUsers: (users: Array<User>) => dispatch(addUsers(users)),
    removeFirstUser: (id: number, firstName: string) => dispatch(removeFirstUser(id, firstName)),
    editUser: (id: number) => dispatch(editUser(id))
  };
};

export default connect<ListUsersProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListUsers);
