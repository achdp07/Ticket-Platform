import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home'

const Navbar = () => {
  return (
    <div className='navbar '>
        <img src="src\assets\ICON BLEU.png" alt="" width={45}/>
        <ul className=''>
            <Link to='/'><li className=" 
            relative pb-1 
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-blue-500 
            after:transition-all after:duration-300 
            hover:after:w-full hover:after:bg-blue-500"
            >Home</li></Link>

            <Link to='/events'>
              <li className="
              relative pb-1 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 
              after:transition-all after:duration-300 
              hover:after:w-full hover:after:bg-blue-500">
                Events
              </li>
            </Link>
            <Link to='/about'>
              <li className="
              relative pb-1 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 
              after:transition-all after:duration-300 
              hover:after:w-full hover:after:bg-blue-500">
                About
              </li>
            </Link>
            <Link to='/contact'>
              <li className="
              relative pb-1 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 
              after:transition-all after:duration-300 
              hover:after:w-full hover:after:bg-blue-500">
                Contact
              </li>
            </Link>
            
            
            
        </ul>
        <Link to='/login'><button class="px-8 py-2 bg-blue-600 text-white font-medium rounded-full 
         hover:bg-blue-700 focus:outline-none focus:ring-2 
         focus:ring-blue-500 focus:ring-offset-2 
         transition-colors duration-200">Create an event</button></Link>
    </div>
  )
}

export default Navbar