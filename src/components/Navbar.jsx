import React, { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navLinks = [
    { to: "Inicio", label: "Inicio" },
    { to: "Productos", label: "Productos" },
    { to: "Destacados", label: "Destacados" },
    { to: "Contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 h-20">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link
          to="Inicio"
          smooth={true}
          duration={500}
          className="flex flex-col items-center text-base text-yellow-400 cursor-pointer -space-y-1"
        >
          <img
            src="Logo mordida.png"
            alt="logo"
            className="w-8 h-auto object-contain"
          />
          <p className="font-bold font-mono">Cactus</p>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 ml-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-20} // Ajusta según la altura del navbar
              className="font-mono text-white hover:text-yellow-400 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center justify-center space-x-5">
          {/* User Icon */}
          <Link to="usuario" className="-m-1 cursor-pointer">
            <img
              src="icons/navbar/bx-user.svg"
              alt="Usuario"
              className="w-6 h-6 ill-white invert"
            />
          </Link>

          {/* Cart Icon */}
          <Link to="carrito" className="relative ml-4 cursor-pointer">
            <img
              src="icons/navbar/shopping-bag-inline.svg"
              alt="Carrito de compras"
              className="w-5 h-5 fill-white invert"
            />
            <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              0
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden bg-yellow-400 rounded p-1 focus:outline-none hover:bg-yellow-300"
            onClick={handleToggle}
          >
            <img
              src={
                toggle ? "icons/navbar/bx-x.svg" : "icons/navbar/bx-menu.svg"
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
          <Link
            key={item.label}
            to={item.to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50} // Ajusta según la altura del navbar
            className="py-2 text-white hover:text-yellow-400 cursor-pointer"
            onClick={() => setToggle(false)} // Cierra el menú al hacer clic
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
