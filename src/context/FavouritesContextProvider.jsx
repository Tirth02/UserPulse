import {useEffect, useState } from "react";
import FavouriteContext from "./FavouriteContext";


export const FavouritesContextProvider = ({children}) =>
{
    const [favourites, setFavourites] = useState(() => {
      try {
        const stored = localStorage.getItem("favourites");
        if(!stored) return [];
        return JSON.parse(stored);
      } catch (error) {
        console.error("Invalid favourites in localStorage",error);
        return [];
      }
      
      
    });

    useEffect(() => {
      localStorage.setItem("favourites",JSON.stringify(favourites))
    },[favourites])

    const addFavourite = (user) => {
      setFavourites((prev) => {
        if(prev.find((u) => u.id === user.id)) return prev;
        return [...prev,user];
      });
    }

    const removeFavourite = (userId) => {
      setFavourites((prev) => 
        prev.filter((u) => u.id !== userId)
      );
    };

    const isFavourite = (userId) => {
      return favourites.some((u) => u.id === userId);
    }

    // const toggleFavourite = (userId) => {
    //     console.log("In toggle Favourite",userId)
    //     setFavourites((prev) => {
    //         prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    //     })
    // }

    return (
    <FavouriteContext.Provider value={{ favourites, addFavourite, removeFavourite, isFavourite  }}>
      {children}
    </FavouriteContext.Provider>
  );
};


