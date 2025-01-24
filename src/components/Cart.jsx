import React, { useState } from "react";

export const Cart = () => {
  const [cartCount, setCartCount] = useState(-1); // Cantidad de artículos
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Visibilidad del desplegable

  // Función para alternar el desplegable y actualizar el estado del carrito
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);

    // Simulación: incrementar el contador si el menú se abre
    if (!isDropdownOpen) {
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="relative">
      {/* Icono del carrito */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        <img
          src="icons/navbar/shopping-bag-inline.svg"
          alt="Carrito de compras"
          className="w-5 h-5 fill-white invert"
        />
        {cartCount >= 0 && (
          <span className="absolute -top-3 left-3 md:left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            {cartCount}
          </span>
        )}
      </div>

      {/* Desplegable */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg z-10">
          <div className="p-8 text-sm text-black text-center font-mono">
            {cartCount === 0
              ? "Carrito vacío"
              : `Tienes ${cartCount} artículo(s)`}
          </div>
        </div>
      )}
    </div>
  );
};
