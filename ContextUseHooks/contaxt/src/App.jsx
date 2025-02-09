import "./App.css";
import ChildA from "./components/ChildA";
import { createContext, useState } from "react";

  export const UserContaxt = createContext();
function App() {
  const [user , setUser] = useState({name:"bhushan"});
  return (
    <>
      <UserContaxt.Provider value= {user}>
        <h1> hello </h1>
        <ChildA></ChildA>
      </UserContaxt.Provider>
    </>
  );
}

export default App;
