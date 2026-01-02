import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
const Layout = ({ children }) => {

  const { favourites } = useContext(FavouriteContext);
  return (
    <>
      <header className="flex justify-between items-center p-4 shadow bg-white">
        <h1 className="font-bold text-lg">Users App</h1>

        <nav className="flex gap-4">
          <Link to="/">Users</Link>

          <Link to="/favourite" className="relative">
            ❤️ Favourites
            {favourites.length > 0 && (
              <span className="ml-1 text-sm">
                ({favourites.length})
              </span>
            )}
          </Link>
        </nav>
      </header>

      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;