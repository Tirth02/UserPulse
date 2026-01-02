import {useEffect, useState } from "react";
import FavouriteContext from "./FavouriteContext";


export const FavouritesContextProvider = ({children}) =>
{
    const [favourites, setFavourites] = useState([]);

    // const toggleFavourite = (userId) => {
    //     console.log("In toggle Favourite",userId)
    //     setFavourites((prev) => {
    //         prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    //     })
    // }

    return (
    <FavouriteContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouriteContext.Provider>
  );
};


