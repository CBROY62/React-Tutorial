import  style from "./Item.module.css";
function Item({Fooditem , handleBuyButton}) {

  const handaleBuyButtonClicked = (event)=>{
    console.log(event);
    console.log(`${Fooditem} item bing bought`)
  }
  return (
    <>
      <li  className= {`${style['kg-item']} list-group-item`}>
        <span className={`${style['kg-span']} `}> {Fooditem}</span>
        <button className={`${style.button} btn btn-info`}
         onClick={handleBuyButton}
        >Buy</button>
       
      </li>
    </>
  );
}

export default Item;
