import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  email,
  phoneNumber,
  renderField,
  required
} from "../helpers/form-validations";

const withForm = reduxForm({
  form: "signupFrom",
  enableReinitialize: true
});

class SignupFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <label>First Name: </label>
                <Field
                  name="firstName"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required]}
                />
                <label>Last Name: </label>
                <Field
                  name="lastName"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required]}
                />
                <label>Phone Number: </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required, phoneNumber]}
                />
                <label>E-mail: </label>
                <Field
                  name="email"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required, email]}
                />
                <label>Password: </label>
                <Field
                  name="password"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required]}
                />
                <br />
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withForm(SignupFrom);
