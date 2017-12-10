import * as React from 'react';
import { StateToPropsType } from '../containers/EditUsers';

const avatar = require('../images/ic_face_black_48dp_1x.png');

class EditUsers extends React.Component<StateToPropsType> {

  constructor(props: StateToPropsType) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return (
      <div>
        <div>
          EditUsers + {this.props.id}
        </div>
        <div
          key={user.id}
          className="user-info"
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

      </div>
    );
  }
}

export default EditUsers;
