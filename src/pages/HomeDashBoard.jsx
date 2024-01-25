import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/Action";
import TodoTable from "../components/TodoTable";

function HomeDashBoard() {
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!todoInput.trim() == "") {
      dispatch(addTodo(todoInput));
      setTodoInput("");
    }
    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl text-center">Todo App</h1>
        <InputField
          InputFieldType="text"
          todoInput={todoInput}
          handleTodoInput={handleTodoInput}
        />
        <Button title="Submit" handleClick={handleSubmit} />
      </form>
      <TodoTable setTodoInput={setTodoInput} />
    </div>
  );
}

export default HomeDashBoard;
