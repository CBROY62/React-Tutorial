import  style from "./Item.module.css";
function Item(props) {
  return (
    <>
      <li  className= {`${style['kg-item']}`}>
        <span className={`${style['kg-span']} `}> {props.Fooditem}</span>
       
      </li>
    </>
  );
}

export default Item;
