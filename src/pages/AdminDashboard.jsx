import React from 'react'
import Sidebar, { SidebarItem } from '../components/layout/Sidebar'
import {  LifeBuoy, Receipt, Boxes, Package, 
  UserCircle, BarChart3, LayoutDashboard, Settings
 } from 'lucide-react' 


const AdminDashboard = () => {
  return (
    <div>
    <Sidebar />
      <SidebarItem 
      icon={<LayoutDashboard size={20}/> }
      text={"Dashboard"}
      alert={""} 
      />

      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active 
      />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
      <SidebarItem icon={<BarChart3 size={20}/>} text={"Statistics"} active />
    
    </div>
  )
}

export default AdminDashboard