import { connect, Dispatch } from 'react-redux';
import { AddUserAction, AddUsersAction, RemoveUsersAction, StoreState, User } from '../types';
import ListUsers from '../components/ListUsers';
import { addUser, addUsers, removeFirstUser } from '../actions';
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
}

export const mapStateToProps = (state: StoreState, ownProps: OwnProps): ListUsersProps => {
  return {
    routerProps: ownProps,
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

export default connect<ListUsersProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListUsers);
