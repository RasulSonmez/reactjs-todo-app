import React from "react";
import { useContext } from "react";
// COMPONENT
import TodoItem from "./TodoItem";
// CONTEXT
import TodoContext from "../context/TodoContext";

const TodoCategory = ({ category }) => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="col todo-category">
      <div>
        <h4 className="category-title fw-bold text-center">{category}</h4>
        {todos.map((todo, idx) => {
          if (todo.category === category) {
            return <TodoItem todo={todo} key={idx} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TodoCategory;
