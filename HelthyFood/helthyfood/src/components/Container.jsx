import styles from "./Container.module.css";
function Container(props) {
  return <div className={styles.containet}>{props.children}</div>;
}
export default Container;
