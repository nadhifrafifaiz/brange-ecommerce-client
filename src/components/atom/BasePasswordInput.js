import React from "react";
import { Password } from "primereact/password";
import PropTypes from "prop-types";

function BasePasswordInput(props) {
  return (
    <div className="w-full">
      <label htmlFor="username2" className="block">
        {props.label}
      </label>
      <Password
        {...props}
        toggleMask
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
BasePasswordInput.propTypes = {
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  errorMessage: PropTypes.node.isRequired,
};

export default BasePasswordInput;
