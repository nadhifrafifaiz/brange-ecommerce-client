import React from "react";
import BaseTextInput from "../components/atom/BaseTextInput";

const BaseComponent = () => {
  return (
    <div className="m-4">
      <BaseTextInput label="Email" placeholder="Email goes here" />
    </div>
  );
};

export default BaseComponent;
