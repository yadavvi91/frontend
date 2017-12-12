import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import EditUsers from '../components/EditUsers';
import { DeleteUserAction, SaveEditedUserAction, User, RootState } from '../types';
import { deleteUser, saveEditedUser } from '../actions';

export interface StateToPropsType {
  id: number;
  user?: User;
}

type OwnProps = RouteComponentProps<{ id: number }>;

export interface EditUserDispatchProps {
  saveEditedUser(id: number): SaveEditedUserAction;
  deleteUser(id: number): DeleteUserAction;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.editUsersState.editUser
});

export const mapDispatchToProps = (dispatch: Dispatch<EditUserDispatchProps>) => {
  return {
    saveEditedUser: (id: number) => dispatch(saveEditedUser(id)),
    deleteUser: (id: number) => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers);
