import React from "react";
import { InputNumber } from "primereact/inputnumber";
import PropTypes from "prop-types";

function BaseNumberInput(props) {
  return (
    <div className="w-full">
      <label htmlFor="username2" className="block">
        {props.label}
      </label>
      <InputNumber
        {...props}
        id="username"
        className={`w-full appearance-none  rounded border  leading-tight text-gray-700 shadow focus:outline-none ${
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
BaseNumberInput.propTypes = {
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  errorMessage: PropTypes.node.isRequired,
};

export default BaseNumberInput;
