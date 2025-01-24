import React, { useState } from "react";

export const User = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para manejar el despliegue

  // Función para alternar el desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Icono de usuario */}
      <div onClick={toggleDropdown} className="-m-1 cursor-pointer">
        <img
          src="icons/navbar/bx-user.svg"
          alt="Usuario"
          className="w-6 h-6 invert"
        />
      </div>

      {/* Desplegable */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg z-10">
          <ul className="p-4 text-sm text-black font-mono">
            <li className="hover:text-yellow-400 cursor-pointer">
              <a href="/login">Iniciar sesión</a>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer mt-2">
              <a href="/register">Registrarme</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
