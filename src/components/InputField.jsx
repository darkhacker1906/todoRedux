import React, { useState } from "react";

function InputField({inputTextType}) {
 
  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5 mb-2"
        type={inputTextType}
        placeholder="Enter your todo"
      />
    </div>
  );
}

export default InputField;