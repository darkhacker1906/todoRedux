export const addTodo=()=>{
    return{
        type:"ADD_TODO",
        payload:data
    }
}
export const deleteTodo=()=>{
    return{
        type:"DELETE_TODO",
        payload:data
    }
}
export const editTodo=()=>{
    return{
        type:"EDIT_TODO",
        payload:data
    }
}