import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorites: (id) => {}
});

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addfavorite(id){
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    
    function removefavorite(id){
        setFavoriteMealIds((currentFavIds) => 
            currentFavIds.filter((mealId) => mealId !== id)
        )
    }

    const value = {
        ids: favoriteMealIds,
        addfavorite: addfavorite,
        removefavorite: removefavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
    
}

export default FavoritesContextProvider;