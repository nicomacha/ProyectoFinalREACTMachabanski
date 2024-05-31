import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProduct = (producto, cantidad) => {
    if (estaEnCarrito(producto.id)) {
      let product = carrito.find((prod) => prod.id === producto.id);
      product.cantidad += cantidad;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: cantidad }]);
    }
  };

  const removeProduct = (id) => {
    const productos = carrito.filter((pro) => pro.id !== id);
    setCarrito([...productos]);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const estaEnCarrito = (id) => {
    return carrito.some((item) => item.id === id);
  };

  const contadorProductos = () => {
    return carrito.reduce((acum, item) => (acum += item.cantidad), 0);
  };

  const sumaTotalProductos = () => {
    return carrito.reduce(
      (acum, item) => (acum += item.cantidad * item.precio),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addProduct,
        removeProduct,
        clearCart,
        contadorProductos,
        sumaTotalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
