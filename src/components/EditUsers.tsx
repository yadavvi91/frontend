import * as React from 'react';
import { EditUserDispatchProps, StateToPropsType } from '../containers/EditUsers';

class EditUsers extends React.Component<StateToPropsType & EditUserDispatchProps> {

  constructor(props: StateToPropsType & EditUserDispatchProps) {
    super(props);

    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.lastNameChanged = this.lastNameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.phoneChanged = this.phoneChanged.bind(this);
    this.checkBoxChanged = this.checkBoxChanged.bind(this);
    this.saveEditedUser = this.saveEditedUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  render() {
    const user = this.props.user;
    if (user === undefined) {
      return <div>Undefined User</div>;
    }
    return (
      <div
        key={user.id}
        className="main user-info-vertical"
      >
        <div className="details">
          <div>
            {'Info'}
            <input
              id={user.id + user.firstName}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.firstName}`}
              onChange={(e) => this.firstNameChanged(e.target.value)}
            />
            <input
              id={user.id + user.lastName}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.lastName}`}
              onChange={(e) => this.lastNameChanged(e.target.value)}
            />
            <input
              id={user.id + 'email'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.email}`}
              onChange={(e) => this.emailChanged(e.target.value)}
            />
            <input
              id={user.id + 'phone'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.phone}`}
              onChange={(e) => this.phoneChanged(e.target.value)}
            />
          </div>
        </div>
        <div>
          {'Role'}
          <div>
            {'alallalalallala alallala'}
            <input
              id="regular"
              type="checkbox"
              checked={user.role === 'regular'}
              onChange={(e) => this.checkBoxChanged(e.target.value, 'regular')}
            />
          </div>
          <div>
            {'alallalalallala alallala'}
            <input
              id="admin"
              type="checkbox"
              checked={user.role === 'admin'}
              onChange={(e) => this.checkBoxChanged(e.target.value, 'admin')}
            />
          </div>
        </div>
        <div>
          <button
            className="edit-info-item-button"
            onClick={() => this.deleteUser()}
          >
            Delete
          </button>
          <button
            className="edit-info-item-button"
            onClick={() => this.saveEditedUser()}
          >
            Save
          </button>
        </div>
      </div>

    );
  }

  private saveEditedUser() {

  }

  private deleteUser() {

  }

  private firstNameChanged(firstName: string) {
    this.props.firstNameChanged(firstName);
  }

  private lastNameChanged(lastName: string) {
    this.props.lastNameChanged(lastName);
  }

  private emailChanged(email: string) {
    this.props.emailChanged(email);
  }

  private phoneChanged(phone: string) {
    this.props.phoneNumberChanged(phone);
  }

  private checkBoxChanged(isChecked: string, type: string) {
    console.log('isChecked: ' + isChecked + ', type: ' + type);
    if (type === 'admin') {
      this.props.roleNameChanged('admin');
    } else if (type === 'regular') {
      this.props.roleNameChanged('regular');
    }
  }
}

export default EditUsers;
