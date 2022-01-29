import React, { useContext, useState } from "react";
import { ACTIONS } from "./const";
import { TodoContext } from "./Store";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: value });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
