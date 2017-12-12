import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import EditUsers from '../components/EditUsers';
import { StoreState, User } from '../types';

export interface StateToPropsType {
  id: number;
  user: User;
}

type OwnProps = RouteComponentProps<{ id: number }>;

const mapStateToProps = (state: StoreState, ownProps: OwnProps): StateToPropsType => ({
  id: ownProps.match.params.id,
  user: state.users.filter((user) => (user.id === Number(ownProps.match.params.id)))[0]
});

export default connect(mapStateToProps)(EditUsers);