import React from "react";
import { InputTextarea } from "primereact/inputtextarea";
import PropTypes from "prop-types";

function BaseTextareaInput(props) {
  return (
    <div className="w-full">
      <label htmlFor="username2" className="block">
        {props.label}
      </label>

      <InputTextarea
        {...props}
        id="username"
        className={`focus:shadow-outline w-full appearance-none  rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
          props.error ? "p-invalid block" : null
        }`}
        rows={5}
        cols={30}
      />
      {props.error ? (
        <small id="username2-help" className="p-error block">
          {props.errorMessage}
        </small>
      ) : null}
    </div>
  );
}
BaseTextareaInput.propTypes = {
  label: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  errorMessage: PropTypes.node.isRequired,
};

export default BaseTextareaInput;
