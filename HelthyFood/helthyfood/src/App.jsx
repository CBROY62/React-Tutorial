import React from "react";
import Fooditem from "./components/FoodItens";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import "./App.css";
function App() {
  let foodIten = [ "dal" , "Roti" , "Salad" , "Milk" , "Green" ,"Ghee"];

 
  return (
    <Container>
      <h1 className="foodheding">HelthyFood</h1>
      
      <Fooditem items = {foodIten}></Fooditem>
      <ErrorMessage items = {foodIten}></ErrorMessage>
      
    </Container>
  );
}

export default App;
