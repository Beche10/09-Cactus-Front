import React, { useState, useRef, useEffect } from "react";

export const User = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para manejar el desplegable
  const dropdownRef = useRef(null); // Referencia al contenedor del desplegable

  // Cierra el desplegable si se hace clic fuera del componente
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Función para alternar el desplegable
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
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
        <div className="absolute right-0 mt-5 w-48 h-20 bg-white rounded-lg shadow-lg z-10">
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
