import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteTodo } from "../redux/Action";

function TodoTable({ setTodoInput }) {
  const todoList = useSelector((state) => state.list);
  var dispatch = useDispatch();

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleEdit = (todoId) => {};
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            {todoList.map((todo) => (
              <tr
                key={todo.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className=" flex justify-between px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white break-words "
                >
                  <p className="break-words">{todo.data}</p>
                  <div className="flex justify-between text-xl gap-2">
                    <MdDelete onClick={() => handleDelete(todo.id)} />
                    <FaEdit onClick={() => handleEdit(todo.id)} />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoTable;
