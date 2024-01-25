export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      data: data,
      id: new Date().getTime().toString(),
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
export const editTodo = () => {
  return {
    type: "EDIT_TODO",
    payload: {
      data: data,
      todoId: todoId,
    },
  };
};
