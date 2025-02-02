function TodoItem2() {
    let todoname = "Go to collage";
    let tododate = "31/4/2025";
    return (
 <div class="row kg-row">
    <div class="col-4 ">
      {todoname}
    </div>
    <div class="col-4">
      {tododate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Add</button>
    </div>
  </div>
    )
}
export default TodoItem2