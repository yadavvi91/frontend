import * as React from 'react';
import { AddUserDispatchProps, StateToPropsType } from '../containers/AddUser';

class AddUser extends React.Component<StateToPropsType & AddUserDispatchProps> {

  constructor(props: StateToPropsType & AddUserDispatchProps) {
    super(props);

    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.lastNameChanged = this.lastNameChanged.bind(this);
    this.emailChanged = this.emailChanged.bind(this);
    this.phoneChanged = this.phoneChanged.bind(this);
    this.checkBoxChanged = this.checkBoxChanged.bind(this);
    this.saveEditedUser = this.saveEditedUser.bind(this);
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
            <h4>Edit team member</h4>
            {'Edit contact info, location and role'}
          </div>
          <div>
            {'Info'}
            <input
              id={user.id + user.firstName}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.firstName}`}
              placeholder={'First Name'}
              onChange={(e) => this.firstNameChanged(e.target.value)}
            />
            <input
              id={user.id + user.lastName}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.lastName}`}
              placeholder={'Last Name'}
              onChange={(e) => this.lastNameChanged(e.target.value)}
            />
            <input
              id={user.id + 'email'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.email}`}
              placeholder={'Email ID'}
              onChange={(e) => this.emailChanged(e.target.value)}
            />
            <input
              id={user.id + 'phone'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.phone}`}
              placeholder={'Phone Number'}
              onChange={(e) => this.phoneChanged(e.target.value)}
            />
          </div>
        </div>
        <div>
          {'Role'}
          <div>
            {'Regular - Can\'t delete members'}
            <input
              id="regular"
              type="checkbox"
              checked={user.role === 'regular'}
              onChange={(e) => this.checkBoxChanged(e.target.value, 'regular')}
            />
          </div>
          <div>
            {'Admin - Can delete members'}
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
            onClick={() => this.saveEditedUser()}
          >
            Save
          </button>
        </div>
      </div>

    );
  }

  private saveEditedUser() {
    if (this.props.user !== undefined) {
      this.props.saveUser(this.props.user);
      this.props.routerProps.history.push(``);
    }
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

export default AddUser;
