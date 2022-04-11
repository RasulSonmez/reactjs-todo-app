import React from "react";
import { useContext } from "react";
import { FiPlus } from "@react-icons/all-files/fi/FiPlus";
// CONTEXT
import TodoContext from "../context/TodoContext";

const TodoInput = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    todoText,
    setTodoText,
    addTodo,
  } = useContext(TodoContext);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="row todo-select">
        <div className="row">
          <div className="col">
            <form className="form">
              <input
                onChange={(e) => {
                  setTodoText(e.target.value);
                }}
                type="text"
                placeholder="Add a todo"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (todoText.length > 0) {
                    addTodo(todoText, selectedCategory);
                  } else {
                    alert("Please enter a todo");
                  }
                }}
              >
                {" "}
                <FiPlus />
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="category-selection">
              <select
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="Work">Work</option>
                <option value="Home">Home</option>
                <option value="School">School</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
