import React from "react";
import { useSelector } from "react-redux";
import BaseTextInput from "../components/atom/BaseTextInput";

const BaseComponent = () => {
  const authGlobal = useSelector((state) => state.auth);

  return (
    <div className="m-4">
      <p>{authGlobal.username}</p>
      <BaseTextInput label="Email" placeholder="Email goes here" />
    </div>
  );
};

export default BaseComponent;
