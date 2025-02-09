import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./App.css";
import TodoList from "./component/Todolist";
import { useState } from "react";

function App() {
  // const initialtodoitem = [
  //   {
  //     todoName: "Buy Milk",
  //     TodoDate: "5/27/2025",
  //   },
  //   {
  //     todoName: "Go to collage",
  //     TodoDate: "5/23/2025",
  //   },
  //   {
  //     todoName: "Go to Home",
  //     TodoDate: "5/23/2025",
  //   },
  // ];
  const [todoitem, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDoeDate) => {
    const newTodoItem = [
      ...todoitem,
      { todoName:itemName , TodoDate: itemDoeDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (itemName) =>{
    const newTodoItems = todoitem.filter(item =>item.todoName !== itemName);
    setTodoItems(newTodoItems);
   
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
       {todoitem.length === 0 && <welcommeMessage></welcommeMessage>}
      <TodoList TodoList={todoitem}  onDeleteClick = {handleDeleteItem}></TodoList>
    </center>
  );
}

export default App;
