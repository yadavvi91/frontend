import * as React from 'react';
import { StateToPropsType } from '../containers/EditUsers';

class EditUsers extends React.Component<StateToPropsType> {

  constructor(props: StateToPropsType) {
    super(props);

    this.saveUser = this.saveUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.checkBoxChanged = this.checkBoxChanged.bind(this);
  }

  render() {
    const user = this.props.user;
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
              onChange={(e) => this.nameChange(e.target.value)}
            />
            <input
              id={user.id + user.lastName}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.lastName}`}
              onChange={(e) => this.lastNameChange(e.target.value)}
            />
            <input
              id={user.id + 'email'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.email}`}
              onChange={(e) => this.emailChange(e.target.value)}
            />
            <input
              id={user.id + 'phone'}
              type="text"
              className="edit-info-item"
              defaultValue={`${user.phone}`}
              onChange={(e) => this.phoneChange(e.target.value)}
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
              checked={this.props.user.role === 'regular'}
              onChange={(e) => this.checkBoxChanged(e.target.value, 'regular')}
            />
          </div>
          <div>
            {'alallalalallala alallala'}
            <input
              id="admin"
              type="checkbox"
              checked={this.props.user.role === 'admin'}
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
            onClick={() => this.saveUser()}
          >
            Save
          </button>
        </div>
      </div>

    );
  }

  private saveUser() {

  }

  private deleteUser() {

  }

  private nameChange(firstName: string) {

  }

  private lastNameChange(lastName: string) {

  }

  private emailChange(email: string) {

  }

  private phoneChange(phone: string) {

  }

  private checkBoxChanged(isChecked: string, type: string) {
    console.log('isChecked: ' + isChecked + ', type: ' + type);
  }
}

export default EditUsers;
