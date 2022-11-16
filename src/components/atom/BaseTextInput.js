import React from "react";
import PropTypes from "prop-types";

function BaseTextInput(props) {
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col gap-1">
        <label
          htmlFor={props.label}
          className="block text-sm font-medium text-gray-700"
        >
          {props.label}
        </label>
        <input
          className={`focus:shadow-outline w-full appearance-none  rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
            props.error ? "border-red-500" : null
          }`}
          id={props.label}
          type="text"
          placeholder={props.placeholder}
        />
        {props.error ? (
          <p
            className={`block text-sm font-semibold  ${
              props.error ? "text-red-500" : "text-gray-700"
            }`}
          >
            {props.errorMessage}
          </p>
        ) : null}
      </div>
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
