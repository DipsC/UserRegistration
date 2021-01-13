import {connect} from 'react-redux';
import {usersSet,loginUsersSet} from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
  setUsers: data => {
    dispatch(usersSet(data));
  },
  setLoginUser: data => {
    dispatch(loginUsersSet(data));
  }
});

const mapStateToProps = state => ({
  users: state.users ? state.users : [],
  loginUser: state.loginUser ? state.loginUser : null
});

export default connect(mapStateToProps, mapDispatchToProps);