import Item from "./Item";
function Fooditem({items}) {
    
  return (
    <ul className="list-group list-group-flush">
      {items.map((item) => (
        <Item key={item} Fooditem={item}></Item>
      ))}
    </ul>
  );
}

export default Fooditem;
