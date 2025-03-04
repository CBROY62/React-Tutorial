import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">MyApp</Link>

      <div className="relative">
        <button
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          onClick={() => setShowDropdown(!showDropdown)}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Menu
        </button>

        {showDropdown && (
          <div
            className="absolute right-0 mt-2 bg-white border shadow-lg rounded w-32"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/page1" className="block px-4 py-2 hover:bg-gray-200">Page 1</Link>
            <Link to="/page2" className="block px-4 py-2 hover:bg-gray-200">Page 2</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
