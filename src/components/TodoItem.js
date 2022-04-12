import React from "react";
import { useContext } from "react";
import { FiCheck } from "@react-icons/all-files/fi/FiCheck";
import { FiTrash2 } from "@react-icons/all-files/fi/FiTrash2";
//CONTEXT
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo, todos, setTodos } = useContext(TodoContext);
  return (
    <div className="todo-item-content">
      <ul className={todo.completed ? "text-success" : null}>
        <li className="todo-item">
          - {todo.text}{" "}
          <div>
            <button
              className="todo-button-check"
              onClick={() => {
                const newTodo = { ...todo, completed: !todo.completed };
                setTodos(
                  todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
                );
              }}
            >
              <FiCheck />
            </button>
            <button
              className="todo-button-del"
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              <FiTrash2 />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
