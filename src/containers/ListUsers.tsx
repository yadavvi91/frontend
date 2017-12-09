import { connect } from 'react-redux';
import { StoreState, User } from '../types';
import ListUsers from '../components/ListUsers';

export interface ListUsersProps {
  users: Array<User>;
}

export const mapStateToProps = (state: StoreState): ListUsersProps => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, null)(ListUsers);
