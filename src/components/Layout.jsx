import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
import { Moon, Sun, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContextProvider";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { favourites } = useContext(FavouriteContext);
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    setOpen(false);
    navigate("/login");
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow 
        bg-white dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 transition-colors"
      >
        <h1 className="font-bold text-lg">Users App</h1>

        <nav className="flex items-center gap-6">
          {/* Users link */}
          <Link
            to="/"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            Users
          </Link>

          {/* Favourites link */}
          <Link
            to="/favourite"
            className="flex items-center gap-1 relative hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <Heart size={18} />
            <span>Favourites</span>

            {favourites.length > 0 && (
              <span className="ml-1 text-sm font-medium">
                ({favourites.length})
              </span>
            )}
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-gray-800 dark:text-gray-200" size={20} />
            )}
          </button>

          {!user ? (
            <Link
              to="/login"
              className="px-3 py-1.5 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button onClick={() => setOpen((p) => !p)}>
                <img
                  src={user.picture.thumbnail}
                  alt="profile"
                  className="w-9 h-9 rounded-full border"
                />
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded shadow-lg">
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      <main
        className="min-h-screen bg-gray-50 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 transition-colors p-4"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
