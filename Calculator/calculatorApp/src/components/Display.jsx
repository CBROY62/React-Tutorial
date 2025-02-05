import styles from "./Display.module.css";
function Display({calval}) {
  return (
    <input type="text" className={styles.display} value={calval} readOnly />
  );
}
export default Display;
