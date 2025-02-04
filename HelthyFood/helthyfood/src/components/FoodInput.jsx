import React from "react";
import styles from "./FoodInput.module.css";

export const FoodInput = ({handelonKeyDown}) => {

    
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Item here"
        className={styles.FoodInput}
        onKeyDown={ handelonKeyDown}
      />
    </div>
  );
};
