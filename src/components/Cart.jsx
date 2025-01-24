import React, { useState } from "react";

export const Cart = () => {
  // Estado local para manejar la cantidad de artículos en el carrito
  const [cartCount, setCartCount] = useState(0);

  // Función para agregar un artículo al carrito (simulación)
  const addItemToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div onClick={addItemToCart}>
      <img
        src="icons/navbar/shopping-bag-inline.svg"
        alt="Carrito de compras"
        className="w-5 h-5 fill-white invert"
      />
      {cartCount >= 0 && (
        <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
          {cartCount}
        </span>
      )}
    </div>
  );
};
