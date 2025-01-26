import React, { useState } from "react";
import { Link } from "react-scroll";
import { Cart } from "./Cart";
import { User } from "./User";
import { MenuButton } from "./MenuButton";

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
          offset={-40}
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
              offset={-40} // Ajusta según la altura del navbar
              className="font-mono text-white hover:text-yellow-400 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center justify-center gap-5">
          {/* User Icon */}
          <Link to="usuario" className="-m-1 cursor-pointer">
            <User />
          </Link>

          {/* Cart Icon */}
          <Link to="carrito" className="relative cursor-pointer">
            <Cart />
          </Link>

          {/* Mobile Menu Button */}
          <MenuButton navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};
