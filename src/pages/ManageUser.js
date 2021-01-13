import React from "react";
import { Link, Redirect } from "react-router-dom";
import UserForm from "../components/UserForm";
import withUsers from "../common/decorators/withUsers";
import Header from "../components/Header";

class ManageUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: "M",
      selectedUser: {}
    };
  }

  _onSubmit = data => {
    let {
      setUsers,
      users,
      history,
      match: {
        params: { id }
      }
    } = this.props;
    const { selectedUser } = this.state;
    if (Object.keys(selectedUser).length > 0) {
      users[id] = data;
    } else {
      users.push(data);
    }

    setUsers(null);
    setUsers(users);
    history.push("/users");
  };

  componentDidMount() {
    const {
      users,
      match: {
        params: { id }
      }
    } = this.props;
    this.setState({
      selectedUser: users[id] || {}
    });
  }

  render() {
    const { selectedUser, loginUser } = this.state;
    {
      if (loginUser === null) {
        return <Redirect to="/" />;
      }
    }
    return (
      <div className="form-div">
        <Header />
        <Link to="/users">Back</Link>
        <div>
          <h1>Manage User Form</h1>
        </div>
        <UserForm initialValues={selectedUser} onSubmit={this._onSubmit} />
      </div>
    );
  }
}

export default withUsers(ManageUser);
