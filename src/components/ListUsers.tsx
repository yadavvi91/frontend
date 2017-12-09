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
    this.addMultipleUser = this.addMultipleUser.bind(this);
    this.removeTheFirstUser = this.removeTheFirstUser.bind(this);
    this.editUser = this.editUser.bind(this);

    this.state = {
      counter: this.props.users.length > 1 ? this.props.users[this.props.users.length - 1].id + 1 : 0
    };
  }

  render() {
    return (
      <div className="main">
        <button onClick={() => this.addMultipleUser()}>Add Users</button>
        <button onClick={() => this.removeTheFirstUser()}>Remove First User</button>
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
    this.props.addUser({
      id: this.state.counter,
      firstName: 'abcd',
      lastName: 'efgh',
      email: 'abcd@gmail.com',
      phone: '1234567890',
      role: 'admin'
    });
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    });
  }

  private addMultipleUser() {
    this.props.addUsers([{
      id: this.state.counter,
      firstName: 'abcd',
      lastName: 'efgh',
      email: 'abcd@gmail.com',
      phone: '1234567890',
      role: 'admin'
    }, {
      id: this.state.counter + 1,
      firstName: 'ijkl',
      lastName: 'mnop',
      email: 'ijkl@gmail.com',
      phone: '1234567890',
      role: 'admin'
    }]);
    this.setState({
      ...this.state,
      counter: this.state.counter + 2
    });
  }

  private removeTheFirstUser() {
    this.props.removeFirstUser(this.props.users[0].id, this.props.users[0].firstName);
  }

  private editUser(id: number) {
    console.log(id);
  }
}

export default ListUsers;
