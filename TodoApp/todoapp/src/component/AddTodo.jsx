import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [TodoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChande = (event) => {
    setTodoName(event.target.value);
  };

  const handledueDateChande = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked =()=>{
    onNewItem(TodoName , dueDate);
    setTodoName("");
    setDueDate("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4 ">
          <input
            type="text"
            value={TodoName}
            placeholder="Ente todo here"
            onChange={handleNameChande}
          />
        </div>
        <div className="col-4">
          <input type="date"  value={dueDate} onChange={handledueDateChande} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
