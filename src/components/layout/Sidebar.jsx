import React, { Children } from 'react'
import { ChevronFirst, MoreVertical } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 
    backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50
    flex flex-col relative z-10 w-64 h-screen" >

      {/* Logo Section */}
      <div className="p-2 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r fron-blue-600 to-purple-600 rounded-xl
           flex items-center justify-center shado'>
            <img src="src\assets\ICON BLEU.png" alt="Logo" className='h-6 w-auto'/>
          </div>

          {/* conditional rendering */}
          <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
              Sidebar
            </h1>
            <p className='text-xs text-slate-500 dark:text-white'>
              Links
            </p>
          </div>
        </div>
      </div>  

      {/* Navigation Links */}  
      <nav className='flex p-4 space-y-2 overflow-y-auto'></nav>

      {/* USer profile */} 
      <div className='p-4 border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50
           dark:bg-slate-800/50'>
            <img src="https://dummyimage.com/300x300"
            alt='user profile' className='w-10 h-10 rounded-full ring-2 ring-blue-500'>
            </img>

            <div className='flex-1 min-w-0'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                  Ash Diop
                </p>
                <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                  Admin
                </p>
              </div>

            </div>
          </div>
      </div>


    </div>
    
  )
}

