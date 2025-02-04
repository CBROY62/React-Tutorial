import React, { useState } from "react";
import Fooditem from "./components/FoodItens";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
import { FoodInput } from "./components/FoodInput";
function App() {
  
  let [foodIten, setFoodItem] = useState([
    "dal",
    "Roti",
    "Salad",
    "Milk",
    "Green",
  ]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItem = [...foodIten , newFoodItem]
      setFoodItem(newItem);
    }
     
  };

  return (
    <Container>
      <h1 className="foodheding">HelthyFood</h1>
      <FoodInput handelonKeyDown={onKeyDown}></FoodInput>
      <Fooditem items={foodIten}></Fooditem>
      <ErrorMessage items={foodIten}></ErrorMessage>
    </Container>
  );
}

export default App;
