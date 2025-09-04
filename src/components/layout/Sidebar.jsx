import React, { Children } from 'react'
import { ChevronFirst, MoreVertical } from 'lucide-react'

export default function Sidebar({ }) {
  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-gray-900 border-r shadow-sm w-64 '>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img src="src\assets\ICON BLEU.png" alt="logo" 
          className='w-5 text-white'/>

          <button className='p-0.2 rounded-sm bg-gray-200 hover:bg-grey-100'>
            <ChevronFirst className='w-5 h-auto'/>
          </button>
        </div>

          <ul className='flex-1 p-3'>{}</ul>

        <div className='border-t flex p-3'> 
          <img 
            src="https://picsum.photos/300/300" 
            alt="" 
            className='w-10 h-10 rounded-full mr-3'
          />

          <div
            className='flex justify-between items-center
            w-68 '>
          </div>

          <div className='leading-5'>
            <h4 className=' text-gray-50 font-semibold'>John Doe</h4>
            <span className='text-xs text-gray-300'>johndoe@gmail.com</span>
          </div> 
          <MoreVertical className='text-gray-100 ml-4 mt-1'
          size={30} />
        </div>

  
      </nav>
      
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  return (
    <li 
    className="
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors text-blue-600"> 
       {icon}
      <span>{text}</span>
    </li>
  )

}
