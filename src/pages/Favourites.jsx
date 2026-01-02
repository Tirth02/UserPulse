import React, { useContext } from 'react'
import FavouriteContext from '../context/FavouriteContext';
import UserCard from '../components/UserCard'

const Favourites = ({users}) => {
    const {favourites} = useContext(FavouriteContext);
    // console.log(favourites);
    // const favouriteUsers = users.filter((u) => favourites.includes(u.id));

    if (favourites.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No favorites yet ❤️
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {favourites.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Favourites