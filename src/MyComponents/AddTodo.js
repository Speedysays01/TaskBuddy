import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imp, setImp] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc, imp);

      setTitle("");
      setDesc("");
      setImp("");
    }
  };
  return (
    <div className="addTodo ">
      <h1>Task Buddy</h1>
      <div className="add">
        <h3>Add a Task</h3>
        <form onSubmit={submit}>
          <div className="mb">
            <label htmlFor="title" className="form-label">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control ip"
              id="title "
              placeholder="Enter Task Tile..."
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Task Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control ip"
              id="desc"
              placeholder="Enter Description..."
            />
          </div>

          <div className="horizontal">
            <div className="choice">
              <label htmlFor="imp">
                Task Priority: <span className="blank"></span>
              </label>

              <select
                name={imp}
                id="choice"
                onClick={(e) => {
                  setImp(e.target.value);
                }}
              >
                <option value=" ">Select</option>
                <option value="high">high</option>
                <option value="moderate">moderate</option>
                <option value="low">low</option>
              </select>
            </div>

            <button type="submit" className="btn-add btn-sm ">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
