import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaCat } from "react-icons/fa";
import catImg from "../assets/images.jpeg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-400"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white w-11/12 mx-auto shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={catImg} alt="WarmPaws" className="w-10 h-10" />

          <span className="font-bold text-xl text-orange-600">WarmPaws</span>
        </Link>

        <ul className="hidden md:flex gap-6 text-gray-700">{navLinks}</ul>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border cursor-pointer"
              />

              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white border px-3 py-1 rounded-md shadow-md hidden group-hover:block">
                <p className="text-sm text-gray-700">{user.displayName}</p>
              </div>
            </div>
          ) : null}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex justify-center py-2 border-t">
        <ul className="flex gap-4 text-gray-700">{navLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
