import React, { useEffect, useState } from 'react'
import '../App'
import { useParams } from 'react-router'
import axios from 'axios'
import { BOOK_DETAILS_URL } from '../API'

const BookDetails = () => {

  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res => {
      setBook(res.data);
    })
    .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='book-details flex flex-col px-10 md:flex-row md:justify-evenly my-10 min-h-[67vh] w-[100%]'>
      <div className='md:w-[40%] md:pe-10 '>
        <h2 className='font-bold pb-5 text-amber-600'>{book?.title}</h2>
        <img className='md:w-[50%] w-[40%]' src={book?.image_url} alt="#" />
      </div>
      <div className='md:w-[60%]'>
        <h2 className='font-bold pb-5 text-amber-600 pt-5 md:pt-0'>Description</h2>
        <p>{book?.description}</p>
        <h2 className='font-bold pt-5 text-amber-600'>Authors</h2>
        <p>{book?.authors}</p>
        <h2 className='font-bold pt-5 text-amber-600'>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails