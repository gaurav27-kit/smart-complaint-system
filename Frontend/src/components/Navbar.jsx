import { NavLink, Link } from "react-router-dom";
import Logo from "./ui/Logo";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <a href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </a>

          <a href="#statistics" className="text-gray-700 hover:text-blue-600 transition">
            Statistics
          </a>

          <a href="#footer" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;