import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import { Plus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='navbar '>
      <div className='flex items-center space-x-3'>
        <a href='/home'><img src="src\assets\ICON BLEU.png" alt="" width={30}/></a>
        <div>
        <h1 className='text-lg font-bold text-slate-800'>
          Ticket'am
        </h1>
        <p className='text-xs text-slate-500 dark:text-white'>
          The goat of ticketing
        </p>
        </div>
      </div >
      <div>
        <a href="/login"><button className='hidden lg:flex items-center space-x-2 py-2 px-4
            bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all'>
              <Plus className='h-4 w-4'/>
              <span className='text-sm font-medium'>Create</span>
        </button></a>
      </div>
    </div>
    
  )
}

export default Navbar