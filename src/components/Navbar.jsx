import React from 'react'
import '../App'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar w-[100%] h-[10vh] bg-orange-500 text-white flex'>
      <div className='w-[100%] flex justify-evenly items-center'>
        <Link to="/">
          <h1 className='text-[25px] font-bold'>React Books App</h1>
        </Link>
        <div>
          <Link to="/favorites">
            <h3 className='font-bold text-xl'>Your Favorites</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar