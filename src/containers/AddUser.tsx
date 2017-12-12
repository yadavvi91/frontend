import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import AddUser from '../components/AddUser';
import {
  User,
  RootState,
  FirstNameChangedAction,
  LastNameChangedAction,
  EmailChangedAction,
  PhoneNumberChangedAction,
  RoleNameChangedAction,
  SaveUserAction
} from '../types';
import {
  emailChanged,
  firstNameChanged,
  lastNameChanged,
  phoneNumberChanged,
  roleNameChanged,
  saveUser
} from '../actions';

type OwnProps = RouteComponentProps<{ id: number }>;

export interface StateToPropsType {
  id: number;
  user?: User;
  routerProps: OwnProps;
}

export interface AddUserDispatchProps {
  firstNameChanged(firstName: string): FirstNameChangedAction;
  lastNameChanged(lastName: string): LastNameChangedAction;
  emailChanged(email: string): EmailChangedAction;
  phoneNumberChanged(phone: string): PhoneNumberChangedAction;
  roleNameChanged(role: string): RoleNameChangedAction;
  saveUser(user: User): SaveUserAction;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.editUserState.editUser,
  routerProps: ownProps
});

export const mapDispatchToProps = (dispatch: Dispatch<AddUserDispatchProps>) => {
  return {
    firstNameChanged: (firstName: string) => dispatch(firstNameChanged(firstName)),
    lastNameChanged: (lastName: string) => dispatch(lastNameChanged(lastName)),
    emailChanged: (email: string) => dispatch(emailChanged(email)),
    phoneNumberChanged: (phone: string) => dispatch(phoneNumberChanged(phone)),
    roleNameChanged: (role: string) => dispatch(roleNameChanged(role)),
    saveUser: (user: User) => dispatch(saveUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
