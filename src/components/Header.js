import React from "react";
import withUsers from "../common/decorators/withUsers";

class Header extends React.Component {
  _onSignOut = () => {
    const { setLoginUser, history } = this.props;
    setLoginUser(null);
  };
  render() {
    const { loginUser } = this.props;
    return (
      <div className="container-fluid">
        <button
          className="btn btn-link"
          style={{ float: "right" }}
          onClick={this._onSignOut}
        >
          {loginUser.email} Signout
        </button>
      </div>
    );
  }
}

export default withUsers(Header);
