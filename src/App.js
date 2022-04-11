import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// Context
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="container mt-5">
        <div className="text-center text-light fw-bold">
          <h1>Todo List With Categories</h1>
          <p>Enter your input and select your categoru</p>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
