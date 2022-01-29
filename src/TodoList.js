import React, { useContext } from "react";
import { TodoContext } from "./Store";
import "./index.css";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  return (
    <div>
      <section>
        <div className="incompleted">Tasks:</div>
        {todos?.filter((todo) => !todo.completed).map((todo) => (
          <div className="incompletedTodos" key={todo.id}>
            <span >{todo.text}</span>
            <button
              onClick={() => {
                dispatch({ type: "TOGGLE_TODO", id: todo.id });
              }}
            >
              Completed
            </button>
          </div>
        ))}
      </section>
      <section>
        <div className="completed">Completed:</div>
        {todos
          ?.filter((todo) => todo.completed)
          .map((todo) => (
            <div key={todo.id}>
              <span className="completedTodos">{todo.text}</span>
              <button onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}>
                Delete
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default TodoList;
