function Todoitems({ todoName, TodoDate }) {
  return (
    <div className="row kg-row">
      <div className="col-4 ">{todoName}</div>
      <div className="col-4">{TodoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">
          Add
        </button>
      </div>
    </div>
  );
}
export default Todoitems;
