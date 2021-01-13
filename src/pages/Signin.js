import React from "react";
import { Link, Redirect } from "react-router-dom";
import SigninForm from "../components/SigninForm";
import withUsers from "../common/decorators/withUsers";
import { AppUtils as API } from "../utils/utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  _onSubmit = data => {
    let { setLoginUser, history } = this.props;
    /*  API.signIn(data).then(async (responseJson) => {
      const {status, data: user} = responseJson;
      if (status) {
        setLoginUser(user.firstName)
        history.push("/users");
      } 
    }); */
    setLoginUser(data);
    history.push("/users");
  };

  render() {
    const { loginUser } = this.props;
    {
      if (loginUser !== null) {
        return <Redirect to="/users" />;
      }
    }
    return (
      <div className="form-div">
        <div>
          <h1>Signin</h1>
        </div>
        <SigninForm onSubmit={this._onSubmit} />
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}

export default withUsers(Signin);
