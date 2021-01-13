import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  email,
  maxLength,
  address,
  phoneNumber,
  renderField,
  required
} from "../helpers/form-validations";
import { getDesignations } from "../common/globals";

const withForm = reduxForm({
  form: "userForm",
  enableReinitialize: true
});

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: props.initialValues.gender || "M"
    };
  }

  componentWillReceiveProps(nextProps) {
    const gender = nextProps.initialValues.gender || "M";
    if (gender != this.props.initialValues.gender) {
      this.setState({
        selectedGender: gender
      });
      this.props.change("gender", gender);
    }
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    const { selectedGender } = this.state;

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

                <label>E-mail: </label>
                <Field
                  name="email"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required, email]}
                />
                <br />
                <label>Gender: </label>
                <label>
                  <Field
                    selected={selectedGender}
                    name="gender"
                    component={renderField}
                    type="radio"
                    data={[
                      { value: "M", title: "Male" },
                      { value: "F", title: "Female" }
                    ]}
                    validate={[required]}
                    onChange={({ target: { value: selectedGender } }) =>
                      this.setState({ selectedGender })
                    }
                  />
                </label>
                <br />
                <label>Phone Number: </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  component={renderField}
                  validate={[required, phoneNumber]}
                />

                <label>Address: </label>
                <Field
                  name="address"
                  type="textarea"
                  className="form-control"
                  component={renderField}
                  validate={[required, address, maxLength(140)]}
                />

                <label>Designation: </label>
                <Field
                  placeholder="-- Select Designation --"
                  name="designation"
                  type="dropdown"
                  className="form-control"
                  component={renderField}
                  validate={[required]}
                  data={getDesignations()}
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

export default withForm(UserForm);
