import * as React from 'react';
import { DispatchProps, ListUsersProps } from '../containers/ListUsers';
import { User } from '../types';
import './ListUsers.css';

const avatar = require('../images/ic_face_black_48dp_1x.png');

interface ListState {
  counter: number;
}

class ListUsers extends React.Component<ListUsersProps & DispatchProps, ListState> {

  constructor(props: ListUsersProps & DispatchProps) {
    super(props);

    this.addUser = this.addUser.bind(this);
    this.removeTheFirstUser = this.removeTheFirstUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  render() {
    if (this.props.users === undefined) {
      return <div>No users</div>;
    }
    return (
      <div className="main">
        <div className="header">
          <button className="button" onClick={() => this.addUser()}>Add User</button>
          <div className="title">Team members</div>
          <div className="subtitle">
            {`You have ${this.props.users.length} team members.`}
          </div>
        </div>
        {this.props.users.map((user: User) => (
          <div
            key={user.id}
            className="user-info"
            onClick={() => this.editUser(user.id)}
          >
            <div className="avatar"><img src={avatar}/></div>
            <div className="details">
              <div className="name">{`${user.firstName} ${user.lastName}`}</div>
              <br />
              {user.phone}
              <br />
              {user.email}
            </div>
          </div>
        ))}
      </div>
    );
  }

  private addUser() {
    const nextId = (this.props.users === undefined || this.props.users.length === 0)
      ? 0
      : this.props.users[this.props.users.length - 1].id + 1;
    this.props.addUser({
      id: nextId,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'regular'
    });
  }

  private removeTheFirstUser() {
    this.props.removeFirstUser(this.props.users[0].id, this.props.users[0].firstName);
  }

  private editUser(id: number) {
    this.props.routerProps.history.push(`/edit/${id}`);
    this.props.editUser(this.props.users.filter((user) => (user.id === id))[0]);
  }
}

export default ListUsers;
