import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useDispatch} from "react-redux";
import { addTodo, editTodo } from "../redux/Action";
import TodoTable from "../components/TodoTable";

function HomeDashBoard() {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedTodoId,setSelectedTodoId]=useState(null);
  

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
  const handleUpdate=(selectedTodoId,todoInput)=>{
    if(todoInput.trim()!=="" && selectedTodoId !==null){
      dispatch(editTodo(selectedTodoId, todoInput));
    }
     setSelectedTodoId(null);
     setIsEdit(false);
     setTodoInput("");
  }
  const handleCancel=()=>{
    setSelectedTodoId(null);
    setIsEdit(false);
    setTodoInput("");
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-2xl text-center">Todo App</h1>
        <InputField
          InputFieldType="text"
          todoInput={todoInput}
          handleTodoInput={handleTodoInput}
        />

        {!isEdit ? (
          <Button title="Submit" handleClick={handleSubmit} />
        ) : (
          <>
            <div className="flex gap-2">
              <Button title="UPDATE" handleClick={()=>handleUpdate(selectedTodoId,todoInput)} />
              <Button title="CANCEL" handleClick={handleCancel} />
            </div>
          </>
        )}
      </form>
      <TodoTable setTodoInput={setTodoInput} setIsEdit={setIsEdit} setSelectedTodoId={setSelectedTodoId}/>
    </div>
  );
}

export default HomeDashBoard;
