import AppName from "./assets/component/AppName";
import AddTodo from "./assets/component/AddTodo";
import Todoitem from "./assets/component/todoItem";
import TodoItem2 from "./assets/component/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container"> 
       <AppName></AppName>
<div class="container text-center">
 <AddTodo></AddTodo>
 <Todoitem></Todoitem>
 <TodoItem2></TodoItem2>
  </div>
  
 </center>
  )
}

export default App
