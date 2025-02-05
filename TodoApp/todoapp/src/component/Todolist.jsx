import Todoitems from "./TodoItems";
function TodoList({ TodoList , onDeleteClick }) {
  return (
    <>
      <div className="container text-center">
        {TodoList.map((item) => (
          <Todoitems
            key={item}
            todoName={item.todoName}
            TodoDate={item.TodoDate}
            onDeleteClick={onDeleteClick}
          ></Todoitems>
        ))}
      </div>
    </>
  );
}
export default TodoList;
