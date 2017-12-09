import * as React from 'react';
import { StateToPropsType } from '../containers/EditUsers';

class EditUsers extends React.Component<StateToPropsType> {

  constructor(props: StateToPropsType) {
    super(props);
  }

  render() {
    return (
      <div>
        EditUsers + {this.props.id}
      </div>
    );
  }
}

export default EditUsers;
