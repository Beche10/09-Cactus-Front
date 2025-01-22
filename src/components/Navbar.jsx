import React, { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#Productos", label: "Productos" },
    { href: "#Destacados", label: "Destacados" },
    { href: "#Contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 h-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col items-center text-base text-yellow-400 -space-y-1"
        >
          <img
            src="Logo mordida.png"
            alt="logo"
            className="w-8 h-auto object-contain"
          />
          <p className="font-bold font-mono">Cactus</p>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 ml-8">
          {navLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="font-mono text-white hover:text-yellow-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-5">
          {/* User Icon */}
          <a href="#usuario" aria-label="Iniciar sesión" className="-m-1">
            <img
              src="icons/navbar/Person--Streamline-Bootstrap.svg"
              alt="Usuario"
              className="w-6 h-6 filter invert"
            />
          </a>

          {/* Cart Icon */}
          <a
            href="#carrito"
            aria-label="Carrito de compras"
            className="relative ml-4"
          >
            <img
              src="icons/navbar/shopping-bag-inline.svg"
              alt="Carrito de compras"
              className="w-5 h-5 filter invert"
            />
            <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              0
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden bg-yellow-400 rounded p-1 focus:outline-none hover:bg-yellow-300"
            onClick={handleToggle}
          >
            <img
              src={
                toggle
                  ? "icons/navbar/bx-x.svg" // Ícono de cruz para cerrar
                  : "icons/navbar/bx-menu.svg" // Ícono de menú para abrir
              }
              alt={toggle ? "Cerrar menú" : "Abrir menú"}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={
          toggle
            ? "flex flex-col items-center font-mono bg-black w-full absolute top-20 left-0 right-0 z-50 py-4"
            : "hidden"
        }
      >
        {navLinks.map((item) => (
          <a
            href={item.href}
            key={item.label}
            className="py-2 text-white hover:text-yellow-400"
            onClick={() => setToggle(false)} // Cierra el menú al hacer clic
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
