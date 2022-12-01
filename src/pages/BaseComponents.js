import React from "react";
import { useSelector } from "react-redux";
import BaseTextInput from "../components/atom/BaseTextInput";
import BaseTextareaInput from "../components/atom/BaseTextareaInput";
import BaseNumberInput from "../components/atom/BaseNumberInput";
import BasePasswordInput from "../components/atom/BasePasswordInput";

const BaseComponent = () => {
  const authGlobal = useSelector((state) => state.auth);

  return (
    <div className="m-4">
      <p>{authGlobal.username}</p>
      <BaseTextInput label="Email" placeholder="Email goes here" />
      <BaseTextInput
        label="Email"
        placeholder="Email goes here"
        error={true}
        errorMessage="tes"
      />
      <BaseTextareaInput label="Note" placeholder="Note goes here" />
      <BaseTextareaInput
        label="Note"
        placeholder="Note goes here"
        error={true}
        errorMessage="tes"
      />
      <BaseNumberInput label="Quantity" placeholder="Number" />
      <BaseNumberInput
        label="Quantity"
        placeholder="Number"
        error={true}
        errorMessage="tes"
      />
      <BasePasswordInput label="Password" />
      <BasePasswordInput label="Password" error={true} errorMessage="tes" />
    </div>
  );
};

export default BaseComponent;
