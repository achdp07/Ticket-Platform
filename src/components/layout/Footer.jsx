import React from 'react'
import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    
    <footer className=" bg-blue-600 text-white py-5 px-5 
    border-t-[0.5px] border-gray-400">
        
        <div className="max-w-fit mx-auto
        flex flex-col items-center text-center gap-6
        sm:flex-row
        md:flex-row">
                
            <ul className='flex flex-wrap justify-center gap-6
             items-center'>
                <li className='flex items-center gap-2'>
                    <FaFacebook />
                    <a href="https://www.facebook.com" 
                    className="mr-2 text-white-500 hover:text-blue-500">
                    Facebook  
                    </a>
                </li>

                <li className='flex items-center gap-2'>
                    <FaTwitter />
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-blue-500">
                    Twitter  
                    </a>
                </li>

                <li className='flex items-center gap-2'>
                    <FaDiscord />
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-blue-500">
                    Discord  
                    </a>
                </li>

                <li className='flex items-center gap-2'>
                    <FaInstagram />
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-blue-600">
                    Instagram  
                    </a>
                </li>
            </ul>

        </div>

        

        <div>
            <p className="text-center text-sm mt-4">
                &copy; {new Date().getFullYear()} Ticketam. All rights reserved.
            </p>
        </div>
    </footer>
    
  )
}

export default Footer