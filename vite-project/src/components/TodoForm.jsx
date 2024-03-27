import React, { useState } from "react";

const TodoForm = ({ addTodo, todos, setTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

 

  return (
    <div>
      <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          placeholder="Enter the Task"
          value={value}
        />
        <button type="submit" className="todo-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
