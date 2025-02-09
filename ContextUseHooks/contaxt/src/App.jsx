import "./App.css";
import ChildA from "./components/ChildA";
import { createContext, useState } from "react";

export const UserContaxt = createContext();

export const ThemeContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "bhushan" });

  const [Theme, setTheme] = useState("Light");
  return (
    <>
      <UserContaxt.Provider value={user}>
        <ThemeContext.Provider value={{ Theme, setTheme }}>
          <div
            className="contaneir"
            style={{ backgroundColor: Theme ==='light' ?'beige' :'black' }}
          >
            <ChildA></ChildA>
          </div>
        </ThemeContext.Provider>
      </UserContaxt.Provider>
    </>
  );
}

export default App;
