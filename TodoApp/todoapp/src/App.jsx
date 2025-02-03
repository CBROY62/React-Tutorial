import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./App.css";
import TodoList from "./component/Todolist";

function App() {
  const todoitem = [
    {
      todoName: "Buy Milk",
      TodoDate: "5/27/2025",
    },
    {
      todoName: "Go to collage",
      TodoDate: "5/23/2025",
    },
    {
      todoName: "Go to Home",
      TodoDate: "5/23/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoList TodoList={todoitem}></TodoList>
      
    </center>
  );
}

export default App;
