import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
import { Moon, Sun, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContextProvider";

const Layout = ({ children }) => {
  const { favourites } = useContext(FavouriteContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow 
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
        </nav>
      </header>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 
        text-gray-900 dark:text-gray-100 transition-colors p-4"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
