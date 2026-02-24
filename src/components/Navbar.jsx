import { NavbarData } from "../data/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { LogOut, User } from "lucide-react";

const Navbar = ({ darkMode, toggleTheme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full h-[55px] flex justify-between items-center px-6 bg-gray-800 border-b border-gray-700">
      {/* Left: Navigation Links */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-lg"
                : "text-gray-300 hover:text-white font-medium text-lg transition"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Right: Auth + Theme */}
      <div className="flex items-center gap-x-4">
        {user ? (
          <>
            {/* User greeting */}
            <div className="flex items-center gap-x-2 text-gray-300 text-sm">
              <User size={16} className="text-blue-400" />
              <span className="hidden sm:inline">{user.name}</span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-x-1.5 px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-sm text-gray-300 hover:text-white transition font-medium"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg font-medium transition"
            >
              Sign Up
            </NavLink>
          </>
        )}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg font-medium transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
