import React, { Component } from "react";

class ReduxField extends Component {
  _dropDownChange = event => {
    const {
      input: { name },
      _dropDownChange
    } = this.props;
    _dropDownChange({ name, value: event.target.value });
  };

  render() {
    const {
      input,
      divStyle = {},
      type = "text",
      meta,
      _dropDownChange = null,
      ...rest
    } = this.props;
    return (
      <div style={divStyle}>
        {type == "dropdown" ? (
          <select
            {...rest}
            {...input}
            {...(_dropDownChange ? { onChange: this._dropDownChange } : {})}
          >
            {rest.placeholder && <option value={""}>{rest.placeholder}</option>}
            {rest.data.map((value, key) => (
              <option key={"reduxDropdown" + key} value={value.key}>
                {value.title}
              </option>
            ))}
          </select>
        ) : null}

        {type == "radio"
          ? rest.data.map(o => (
              <label key={o.value}>
                <input
                  {...rest}
                  {...input}
                  id={"options" + o.value}
                  type="radio"
                  value={o.value}
                  checked={o.value == rest.selected}
                />{" "}
                {o.title}
              </label>
            ))
          : null}

        {type == "text" || type == "password" ? (
          <input {...rest} {...input} type={type} />
        ) : type == "textarea" ? (
          <textarea {...rest} {...input} />
        ) : null}

        {meta.touched && meta.error && (
          <span className="text-danger">{meta.error}</span>
        )}
      </div>
    );
  }
}

export const renderField = props => {
  return <ReduxField {...props} />;
};

export const required = value => (value ? undefined : "Required");

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const phoneNumber = value =>
  value && !/^\+?\d*$/.test(value) ? "Invalid Phone Number" : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const address = value =>
  value && !/^[0-9a-zA-Z\_]+$/.test(value)
    ? "Special charecter not allow"
    : undefined;
