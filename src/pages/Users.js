import React from "react";
import { Link, Redirect } from "react-router-dom";
import UserRow from "../components/UserRow";
import withUsers from "../common/decorators/withUsers";
import Header from "../components/Header";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  _onEdit = index => {
    const { history } = this.props;
    history.push(`/user/${index}`);
  };

  _onDelete = index => {
    let { users, setUsers } = this.props;
    if (window.confirm("Are you sure want to delete?")) {
      users.splice(index, 1);
      setUsers(null);
      setUsers(users);
      this.forceUpdate();
    }
  };

  render() {
    const { users, loginUser } = this.props;
    {
      if (loginUser === null) {
        return <Redirect to="/" />;
      }
    }
    return (
      <div>
        <Header />
        <Link to="/user/new">Add User</Link>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Gender</th>
                <th>Phone number</th>
                <th>Address</th>
                <th>Designation</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((data, index) => (
                  <UserRow
                    data={data}
                    key={index}
                    index={index}
                    onEdit={this._onEdit}
                    onDelete={this._onDelete}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={10}> No users available!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withUsers(Users);
