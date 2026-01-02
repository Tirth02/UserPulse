import { Link } from "react-router-dom";
import FavouriteContext from "../context/FavouriteContext";
import { useContext, useEffect, useState } from "react";

const UserCard = ({ user, onSelect, onFavorite }) => {
  const { addFavourite, removeFavourite, isFavourite } = useContext(FavouriteContext);
  const [toast,setToast] = useState("");

  const favourite = isFavourite(user.id);

  const handleFavourite =() => {
    if(favourite){
      removeFavourite(user.id);
      setToast("Removed from favourites 💔");
    }
    else
    {
      addFavourite(user);
      setToast("Added to favourites ❤️");
    }
  }

  useEffect(() => {
    if(!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    },2500);

    return () => clearTimeout(timer);
  },[toast])
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">

      {/* Toast message */}
      {toast && (
        <div className="absolute top-2 right-2 bg-black text-white text-sm px-3 py-1 rounded shadow animate-fade">
          {toast}
        </div>
      )}
      
      <img
        src={user.picture.medium}
        alt={user.name.first}
        className="w-20 h-20 rounded-full object-cover"
      />

      <div>
        <h3 className="font-medium">{`${user.name.first} ${user.name.last}`}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={onSelect}
          className="px-3 py-1 text-sm border rounded cursor-pointer"
        >
          View
        </button>

        <button
          onClick={handleFavourite}
          className="text-2xl transition-transform hover:scale-110"
        >
          {favourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
