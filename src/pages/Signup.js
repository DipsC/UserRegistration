import React from "react";
import { Link, Redirect } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import { AppUtils as API } from "../utils/utils";
import withUsers from "../common/decorators/withUsers";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  _onSignUp = data => {
    let { history } = this.props;
    /* API.signUp(data).then(async (responseJson) => {
      const {status} = responseJson;
      if (status) {
        history.push("/");
      } 
    }); */
    history.push("/");
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
          <h1>Signup</h1>
        </div>
        <SignupForm onSubmit={this._onSignUp} />
        <Link to="/">Signin</Link>
      </div>
    );
  }
}

export default withUsers(Signup);
