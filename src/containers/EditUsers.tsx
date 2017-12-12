import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import EditUsers from '../components/EditUsers';
import { DeleteUserAction, SaveEditedUserAction, ListUserState, EditUserState, User } from '../types';
import { deleteUser, saveEditedUser } from '../actions';

export interface StateToPropsType {
  id: number;
  user: User;
}

type OwnProps = RouteComponentProps<{ id: number }>;

export interface EditUserDispatchProps {
  saveEditedUser(id: number): SaveEditedUserAction;
  deleteUser(id: number): DeleteUserAction;
}

const mapStateToProps = (state: ListUserState & EditUserState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.users.filter((user) => (user.id === Number(ownProps.match.params.id)))[0]
});

export const mapDispatchToProps = (dispatch: Dispatch<EditUserDispatchProps>) => {
  return {
    saveEditedUser: (id: number) => dispatch(saveEditedUser(id)),
    deleteUser: (id: number) => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers);
