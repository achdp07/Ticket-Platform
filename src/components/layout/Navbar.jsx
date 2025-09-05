import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import { User } from 'lucide-react'
import { ImProfile } from 'react-icons/im'

const Navbar = () => {
  return (
    <div className='navbar '>
      <div className='flex items-center space-x-3'>
        <a href='/'><img src="src\assets\ICON BLEU.png" alt="" width={30}/></a>
        <div>
        <h1 className='text-lg font-bold text-slate-800'>
          Ticket'am
        </h1>
        <p className='text-xs text-slate-500 dark:text-white'>
          The goat of ticketing
        </p>
        </div>
      </div>
      <a href="/login"><button>
        <User className='text-white bg-blue-600 rounded-full p-1 ' />
      </button></a> 
    </div>
    
  )
}

export default Navbar