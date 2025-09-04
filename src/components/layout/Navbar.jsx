import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'
import { User } from 'lucide-react'
import { ImProfile } from 'react-icons/im'

const Navbar = () => {
  return (
    <div className='navbar '>
      <a href='/'><img src="src\assets\ICON BLEU.png" alt="" width={30}/></a>
      <a href="/login"><button>
        <User className='text-white bg-blue-600 rounded-full w-7 p-1' />
      </button></a> 
    </div>
    
  )
}

export default Navbar