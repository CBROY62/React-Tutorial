import Todoitems from "./TodoItems";
function TodoList({ TodoList }) {
  return (
    <>
      <div className="container text-center">
        {TodoList.map((item) => (
          <Todoitems
            key={item}
            todoName={item.todoName}
            TodoDate={item.TodoDate}
          ></Todoitems>
        ))}
      </div>
    </>
  );
}
export default TodoList;
