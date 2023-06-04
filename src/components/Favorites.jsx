import React from 'react'
import '../App'
import { useAppContext } from './context/appContext'


const Favorites = () => {

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className='container my-10 mx-auto'>
      <div className='favorites min-h-[80vh] w-[70%] md:w-[90%] mx-auto flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {favorites.length > 0 ? favorites.map((book) => (
          <div key={book.id} className='book my-3 w-[70%] mx-auto text-center flex flex-col justify-center items-center'>
            <div>
              <h2 className='font-bold mb-3 text-lg text-amber-600'>{book.title}</h2>
            </div>
            <div>
              <img className='w-[100%] h-[300px]' src={book.image_url} alt="#" />
            </div>
            <div>
              {
                favoritesChecker(book.id) ?

                  <button
                    className='px-3 py-2 mt-4 bg-orange-400 font-bold text-white rounded-lg'
                    onClick={() => removeFromFavorites(book.id)}>
                    Remove from Favorites
                  </button>
                  : <button
                    className='px-3 py-2 mt-4 bg-orange-400 font-bold text-white rounded-lg'
                    onClick={() => addToFavorites(book)}>
                    Add to Favorites
                  </button>
              }
            </div>
          </div>
        )) : (
          <h1 className='font-bold text-lg '>You don't have any favorite books yet!</h1>
        )}
      </div>
    </div>
  )
}

export default Favorites