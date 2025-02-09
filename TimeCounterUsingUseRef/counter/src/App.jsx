import { useState , useRef} from "react";
import "./App.css";

function App() {

  const [CountTime , SetTime] = useState(0);

const newItem = useRef(null);
const rebutton = useRef();

  const handleStartButton = ()=>{
    newItem.current = setInterval(() => {
      SetTime( CountTime => CountTime + 1)
      
    }, 1000);

  }

  const handleStopButton = ()=>{
    clearInterval(newItem.current)
    newItem.current = null

  }

  const handleResetButton = () =>{
    handleStopButton()
    SetTime(0);
    rebutton.current.style.backgroundColor = "yellow";
  }
  return (
    <>
    <div className=" main-section">
      <h1> Time Counter : {CountTime}</h1>
      <button className="Start_button" onClick={handleStartButton} ref={rebutton}>Start Button</button>
      <button className="Stop_button" onClick={handleStopButton}> Stop Button</button>
      <button className="Reset_button" onClick={handleResetButton}>Reset Button</button>
    </div>
    </>
  );
}




export default App