import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import EditUsers from '../components/EditUsers';
import {
  User,
  RootState,
  FirstNameChangedAction,
  LastNameChangedAction,
  EmailChangedAction,
  PhoneNumberChangedAction,
  RoleNameChangedAction,
  DeleteUserAction,
  SaveEditedUserAction
} from '../types';
import {
  deleteUser,
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  phoneNumberChanged,
  roleNameChanged,
  saveEditedUser
} from '../actions';

export interface StateToPropsType {
  id: number;
  user?: User;
}

type OwnProps = RouteComponentProps<{ id: number }>;

export interface EditUserDispatchProps {
  firstNameChanged(firstName: string): FirstNameChangedAction;
  lastNameChanged(lastName: string): LastNameChangedAction;
  emailChanged(email: string): EmailChangedAction;
  phoneNumberChanged(phone: string): PhoneNumberChangedAction;
  roleNameChanged(role: string): RoleNameChangedAction;
  saveEditedUser(id: number): SaveEditedUserAction;
  deleteUser(id: number): DeleteUserAction;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.editUsersState.editUser
});

export const mapDispatchToProps = (dispatch: Dispatch<EditUserDispatchProps>) => {
  return {
    firstNameChanged: (firstName: string) => dispatch(firstNameChanged(firstName)),
    lastNameChanged: (lastName: string) => dispatch(lastNameChanged(lastName)),
    emailChanged: (email: string) => dispatch(emailChanged(email)),
    phoneNumberChanged: (phone: string) => dispatch(phoneNumberChanged(phone)),
    roleNameChanged: (role: string) => dispatch(roleNameChanged(role)),
    saveEditedUser: (id: number) => dispatch(saveEditedUser(id)),
    deleteUser: (id: number) => dispatch(deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers);
