import * as React from 'react';
import { DispatchProps, ListUsersProps } from '../containers/ListUsers';
import { User } from '../types';

interface ListState {
  counter: number;
}

class ListUsers extends React.Component<ListUsersProps & DispatchProps, ListState> {

  constructor(props: ListUsersProps & DispatchProps) {
    super(props);

    this.addUser = this.addUser.bind(this);
    this.addMultipleUser = this.addMultipleUser.bind(this);

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addUser()}>Add User</button>
        <button onClick={() => this.addMultipleUser()}>Add User</button>
        {this.props.users.map((user: User) => (
          <div key={user.id}>{user.firstName}</div>
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
      id: this.state.counter,
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
}

export default ListUsers;
