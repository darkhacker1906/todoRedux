const initial_state = {
  list: [],
};
export const reducer = (state = initial_state, action) => {
  if (action.type == "ADD_TODO") {
    const { data, id } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          data: data,
          id: id,
        },
      ],
    };
  } else if (action.type == "DELETE_TODO") {
    const { todoId } = action.payload;
    console.log(todoId);
    const updatedList = state.list.filter((todo) => todo.id !== todoId);
    return {
      ...state,
      list: updatedList,
    };
  } else if (action.type == "EDIT_TODO") {
  } else {
    return state;
  }
};
