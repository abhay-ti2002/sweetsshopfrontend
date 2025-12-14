import React from "react";
import { Link } from "react-router-dom";
import Account from "./Account";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-cyan-400">SweetShop 🍬</h1>
       
      {/* Links */}
      <Account />
    </nav>
  );
};

export default Navbar;
