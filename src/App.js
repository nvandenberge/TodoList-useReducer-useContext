import Store from "./Store";
import AddTodoForm from "./AddTodoForm.js";
import TodoList from "./TodoList.js";
import "./index.css";


function App() {
  return (
    <Store>
      <div className="todoList">
        <AddTodoForm />
        <TodoList />
      </div>
    </Store>
  );
}

export default App;
