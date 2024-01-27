const initial_state = {
  list: [],
  filterType:"all"
};
export const reducer = (state = initial_state, action) => {

  if (action.type == "ADD_TODO") {
    const { data, id, checked } = action.payload;
    return {
      ...state,
      list: [
        ...state.list,
        {
          data: data,
          id: id,
          checked: checked,
        },
      ],
    };
  }
  
  else if (action.type == "DELETE_TODO") {
    const { todoId } = action.payload;
    const updatedList = state.list.filter((todo) => todo.id !== todoId);
    return {
      ...state,
      list: updatedList,
    };
  }
  
  else if (action.type == "EDIT_TODO") {
    const { todoId, data } = action.payload;
    const updatedList = state.list.map((todo) => {
      return todo.id === todoId ? { ...todo, data: data } : todo;
    });
    return {
      ...state,
      list: updatedList,
    };
  } 
  
  else if (action.type == "HANDLE_CHECK") {
    const { todoId } = action.payload;
    const updatedList = state.list.map((todo) => {
      return todo.id === todoId ? { ...todo, checked: !todo.checked } : todo;
    });
    return {
      ...state,
      list: updatedList,
    };
  }
  else if(action.type=="SET_FILTER_TYPE"){
    const {filterType}=action.payload;
    return {
      ...state,
      filterType,
    };
  }
 
  else {
    return state;
  }
};
