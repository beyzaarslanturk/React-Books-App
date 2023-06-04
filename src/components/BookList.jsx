import React, { useEffect, useState } from 'react'
import '../App'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppContext } from './context/appContext'
import { useNavigate } from 'react-router'


const BookList = () => {

    const [books, setBooks] = useState([]);

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='container my-10 mx-auto '>
            <div className='book-list min-h-[80vh] w-[70%] md:w-[90%] mx-auto flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {books.map((book) => (
                    <div key={book.id} className='book my-3 w-[70%] mx-auto text-center flex flex-col justify-center items-center'>
                        <div>
                            <h2 className='font-bold mb-3 text-lg text-amber-600'>{book.title}</h2>
                        </div>
                        <div>
                            <img 
                            className='w-[100%] h-[300px]' 
                            src={book.image_url} alt="#" 
                            onClick={() => navigate(`/books/${book.id}`)}
                            />
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
                ))}
            </div>
        </div>
    )
}

export default BookList