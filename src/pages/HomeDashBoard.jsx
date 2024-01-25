import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

function HomeDashBoard() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl text-center">Todo App</h1>
        <InputField InputFieldType="text" />
        <Button title="Submit" />
      </form>
    </div>
  );
}

export default HomeDashBoard;
