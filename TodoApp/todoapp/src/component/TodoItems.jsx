function Todoitems({ todoName, TodoDate, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-4 ">{todoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitems;
