import React from "react";
import { Field, reduxForm } from "redux-form";
import { email, renderField, required } from "../helpers/form-validations";

const withForm = reduxForm({
  form: "signinFrom",
  enableReinitialize: true
});

class SigninForm extends React.Component {
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
                  type="password"
                  className="form-control"
                  component={renderField}
                  validate={required}
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

export default withForm(SigninForm);
