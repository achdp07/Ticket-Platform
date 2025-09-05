import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Searchbar = () => {
  return (
    <div className='mt-8 py-4 text-gray-900 
    items-center justify-center flex'>
        <form className='w-[350px] relative
         md:w-[550px]'>
            <input type="Search" placeholder='Type here...' className='w-full p-2
            rounded-full bg-slate-200 shadow-sm' />
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2
            rounded-full bg-blue-600 '>
                <AiOutlineSearch className='text-white' />
            </button>

        </form>
    </div>
  )
}

export default Searchbar