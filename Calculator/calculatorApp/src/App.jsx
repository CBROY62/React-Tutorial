import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/display";

function App() {
  let [calval , setCalval] = useState("");
  const onButtonClicked = (ButtonText) => {

    if(ButtonText === 'C' ){
      setCalval("");

    }else if(ButtonText === '='){
      const Result = eval(calval);
      setCalval(Result);

    } else{
      const newDisplayValue = calval + ButtonText;
      setCalval(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display calval={calval}></Display>
      <ButtonContainer onButtonClicked={onButtonClicked}></ButtonContainer>
    </div>
  );
}

export default App;
