export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      data: data,
      id: new Date().getTime().toString(),
      check:false
    },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: "DELETE_TODO",
    payload: {
      todoId: todoId,
    },
  };
};
export const editTodo = (todoId,data) => {
  return {
    type: "EDIT_TODO",
    payload: {
      data: data,
      todoId: todoId,
    },
  };
};
export const handleCheck = (todoId) => {
    return {
      type: "HANDLE_CHECK",
      payload: {
        todoId: todoId,
      },
    };
  };