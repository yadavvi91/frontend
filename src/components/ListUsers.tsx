import * as React from 'react';
import { ListUsersProps } from '../containers/ListUsers';
import { User } from '../types';

class ListUsers extends React.Component<ListUsersProps & null> {

  render() {
    return (
      <div>
        {this.props.users.map((user: User) => (
          <div key={user.id}>{user.firstName}</div>
        ))}
      </div>
    );
  }
}

export default ListUsers;
