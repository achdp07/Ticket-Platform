import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import {  LifeBuoy, Receipt, Boxes, Package, 
  UserCircle, BarChart3, LayoutDashboard, Settings
 } from 'lucide-react' 
import Header from '../components/layout/Header'


const AdminDashboard = () => {
  return (
    <div className='"min-h-screen flex transition-all duration-500"'>
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header at the top */}
        <Header />

        {/* Page content goes here */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Your dashboard content */}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard