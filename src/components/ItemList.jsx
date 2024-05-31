import Item from "./Item";

const Itemlist = ({ items }) => {
  return (
    <>
      {items.map((producto) => (
        <Item key={producto.id} productoCard={producto} />
      ))}
    </>
  );
};

export default Itemlist;
