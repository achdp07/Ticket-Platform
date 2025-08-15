import React from 'react'
import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
        <div className="">

            <div className="flex justify-center space-x-4 mb-20 mt-10">
            <ul className='flex space-x-2'>
                <li>
                    {" "}
                    <FaFacebook className="inline mr-2" />
                    {" "}
                    <a href="https://www.facebook.com" 
                    className="mr-2 text-white-500 hover:text-gray-800">
                    Facebook  
                    </a>
                </li>

                <li>
                    {" "}
                    <FaTwitter className="inline mr-2" />
                    {" "}
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-gray-800">
                    Twitter  
                    </a>
                </li>

                <li>
                    {" "}
                    <FaDiscord className="inline mr-2" />
                    {" "}
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-gray-800">
                    Discord  
                    </a>
                </li>

                <li>
                    {" "}
                    <FaInstagram className="inline mr-2" />
                    {" "}
                    <a href="https://www.facebook.com" 
                    className="text-white-500 hover:text-gray-800">
                    Instagram  
                    </a>
                </li>
            </ul>

            <a href="https://www.twitter.com" className="mx-2 text-blue-400 hover:text-blue-600">
                          
            </a>
            <a href="https://www.instagram.com" className="mx-2 text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="mx-2 text-blue-600 hover:text-blue-800">
                <i className="fab fa-linkedin-in"></i>          
            </a>
            </div>
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