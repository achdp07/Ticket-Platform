import { Bell, Menu, Plus, Settings, 
ChevronDown
 } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className=' bg-white/80 backdrop-blur-xl border-b border-slate-200/50
    px-6 py-1.5'>
      <div className="flex items-center justify-between w-full">
        {/* Left Section */}
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg hover:bg-slate-100'>
            <Menu className='h-6 w-6 text-slate-700' />
          </button>

          <div className='hidden md:block'>
            <h1 className='text-xl font-bold'>Dashboard</h1>
            <p className='text-sm text-slate-700'>Welcome back, Ash ! here is what happening today</p>
          </div>
        </div>


        {/* Right */}
          <div className='flex items-center space-x-3'>
            {/* Quick Action */}
            <button className='hidden lg:flex items-center space-x-2 py-2 px-4
            bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all'>
              <Plus className='h-4 w-4'/>
              <span className='text-sm font-medium'>Create</span>
            </button>

            {/* QNotifications */}
            <button className='relative p-2 rounded-xl hover:bg-slate-100'>
              <Bell className='h-6 w-6'/>
              <span className='absolute -top-1 -right-1 bg-red-500 text-white
              text-xs w-4 h-4 rounded-full flex items-center justify-center
              '>
              3</span>
            </button>

            {/* Settings */}
            <button className='p-2 rounded-lg hover:bg-slate-100'>
              <Settings className='h-6 w-6'/>
            </button>

            {/* User Profile */}
            <div className='hidden md:flex p-1 rounded-lg
            items-center hover:bg-slate-100 cursor-pointer
            border-l border-slate-200/50 pl-4 space-x-2'>
              
              <img src="https://picsum.photos/200/300" 
              alt="User Profile" className='w-8 h-8 rounded-full'/>
              <div className='flex-1 px-2'>
              <span className='text-sm font-medium'>Ash Diop</span>
              <p className='text-xs text-slate-500 '>Admin</p>
              </div>
              <ChevronDown className='h-4 w-4 text-slate-700'/>
            </div>    
          </div>
      </div>
    </div>
  )
}

export default Header