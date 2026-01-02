import { Link } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
import { useContext } from "react";

const UserCard = ({ user, onSelect, onFavorite }) => {
  const { setFavourites } = useContext(FavouriteContext);
  //console.log(favourites);
  //const isFavorite = favourites ? favourites.includes(user.id) : false;

  const handleFavourite =() => {
    setFavourites((prev) => [...prev, user]);
  }
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      <img
        src={user.picture.medium}
        alt={user.name.first}
        className="w-20 h-20 rounded-full object-cover"
      />

      <div>
        <h3 className="font-medium">{`${user.name.first} ${user.name.last}`}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onSelect}
          className="px-3 py-1 text-sm border rounded cursor-pointer"
        >
          View
        </button>

        <button
          onClick={handleFavourite}
          className="px-3 py-1 text-sm border rounded cursor-pointer"
        >
          {/* Favourite */}
           ❤️
        </button>
      </div>
    </div>
  );
};

export default UserCard;
