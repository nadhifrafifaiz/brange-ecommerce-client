import React from "react";
import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";

function BaseTextInput(props) {
  return (
    <div className="w-full">
      <label htmlFor="username2" className="block">
        {props.label}
      </label>
      <InputText
        {...props}
        id="username"
        className={`w-full appearance-none rounded leading-tight text-gray-700  focus:outline-none ${
          props.error ? "p-invalid block" : null
        }`}
      />
      {props.error ? (
        <small id="username2-help" className="p-error block">
          {props.errorMessage}
        </small>
      ) : null}
    </div>
  );
}
BaseTextInput.propTypes = {
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  errorMessage: PropTypes.node.isRequired,
};

export default BaseTextInput;
