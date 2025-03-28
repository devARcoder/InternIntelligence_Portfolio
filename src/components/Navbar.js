import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="px-3 py-3 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">dev<span className="text-green-500">AR</span>coder</Link>
      <div className="space-x-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
