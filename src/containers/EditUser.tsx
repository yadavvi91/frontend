import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import EditUser from '../components/EditUser';
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

type OwnProps = RouteComponentProps<{ id: number }>;

export interface StateToPropsType {
  id: number;
  user?: User;
  routerProps: OwnProps;
}

export interface EditUserDispatchProps {
  firstNameChanged(firstName: string): FirstNameChangedAction;
  lastNameChanged(lastName: string): LastNameChangedAction;
  emailChanged(email: string): EmailChangedAction;
  phoneNumberChanged(phone: string): PhoneNumberChangedAction;
  roleNameChanged(role: string): RoleNameChangedAction;
  saveEditedUser(user: User): SaveEditedUserAction;
  deleteUser(user: User): DeleteUserAction;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.editUserState.editUser,
  routerProps: ownProps
});

export const mapDispatchToProps = (dispatch: Dispatch<EditUserDispatchProps>) => {
  return {
    firstNameChanged: (firstName: string) => dispatch(firstNameChanged(firstName)),
    lastNameChanged: (lastName: string) => dispatch(lastNameChanged(lastName)),
    emailChanged: (email: string) => dispatch(emailChanged(email)),
    phoneNumberChanged: (phone: string) => dispatch(phoneNumberChanged(phone)),
    roleNameChanged: (role: string) => dispatch(roleNameChanged(role)),
    saveEditedUser: (user: User) => dispatch(saveEditedUser(user)),
    deleteUser: (user: User) => dispatch(deleteUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
