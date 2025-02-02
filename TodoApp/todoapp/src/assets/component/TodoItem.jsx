function Todoitem(){
    let todoName = "Buy Milk";
    let TodoDate = "2/2/2025";
    return(
        <div class="row kg-row">
    <div class="col-4 ">
      {todoName}
    </div>
    <div class="col-4">
      {TodoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button">Add</button>
    </div>
  </div>
    )
}
export default Todoitem;