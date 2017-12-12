import { connect, Dispatch } from 'react-redux';
import { AddUserAction, RemoveUsersAction, User, RootState, EditUserAction } from '../types';
import ListUsers from '../components/ListUsers';
import { addUser, editUser, removeFirstUser } from '../actions';
import { RouteComponentProps } from 'react-router-dom';

type OwnProps = RouteComponentProps<{}>;

export interface ListUsersProps {
  routerProps: OwnProps;
  users: Array<User>;
}

export interface DispatchProps {
  addUser(user: User): AddUserAction;
  removeFirstUser(id: number, firstName: string): RemoveUsersAction;
  editUser(user: User): EditUserAction;
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
    removeFirstUser: (id: number, firstName: string) => dispatch(removeFirstUser(id, firstName)),
    editUser: (user: User) => dispatch(editUser(user))
  };
};

export default connect<ListUsersProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(ListUsers);
