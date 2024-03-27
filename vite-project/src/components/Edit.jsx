import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      editTodo(value, task.id);
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
          placeholder="Update Task"
          value={value}
        />
        <button type="submit" className="todo-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
