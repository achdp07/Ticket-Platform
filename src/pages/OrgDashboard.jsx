import React from 'react'
import Sidebar from '../components/layout/Sidebar'

const OrgDashboard = () => {
  return (
    <div >
    <aside className='h-screen'>
      <nav className=' flex flex-col bg-white border-r shadow-sm'>
        <div className='p-4 pb-2 flex justify-between items-center'>
          <img src="src\assets\ICON BLEU.png" alt="Logo" className='h-6 w-auto'/>
          <button className='p-2 rounded-md hover:bg-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" 
            viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d
                ="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>   
    </aside>

    <p>OrgDashboard</p>

    </div>
  )
}

export default OrgDashboard