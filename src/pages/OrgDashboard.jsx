import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import { CalendarDays, Users, DollarSign, Clock, 
  LayoutDashboard ,FolderKanban, Calendar, CreditCard,
  PlusSquare } from 'lucide-react'
import { Link } from 'react-router-dom'



const OrgDashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="fixed top-0 left-0 h-screen w-64">
        <div className="transition duration-300 ease-in-out bg-white/80 backdrop-blur-xl border-r border-slate-200/50
            flex flex-col w-64 h-screen relative z-10">

          {/* Logo Section */}
          <div className="p-2 border-slate-200/50">
            <div className="flex items-center space-x-3 ml-4">
              <div className="w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center shadow">
                <Link to="/home">
                  <img src="src/assets/ICON BLEU.png" alt="Logo" className="h-6 w-auto" />
                </Link>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Ticket'am</h1>
                <p className="text-xs text-slate-500 dark:text-white">The goat of ticketing</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col gap-2 p-4">
            <Link to="/organizer" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <LayoutDashboard size={18} /> Dashboard
            </Link>

            <Link to="/organizer/projects" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <FolderKanban size={18} /> Projects
            </Link>

            <Link to="/organizer/team" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <Users size={18} /> Team
            </Link>

            <Link to="/organizer/calendar" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <Calendar size={18} /> Calendar
            </Link>

            <Link to="/organizer/transactions" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <CreditCard size={18} /> Transactions
            </Link>

            <Link to="/create-event" className="flex items-center gap-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
              <PlusSquare size={18} /> Create Event
            </Link>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50">
              <img src="https://picsum.photos/200/300" alt="user profile" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800">Ash Diop</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
            </div>
          </div>

        </div>
      </aside>

    


      {/* Main content area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header at the top */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <Header />
        </div>
    
        {/* Page content goes here */}
        <div className="mt-16 p-4 flex-1" style={{ height: 'calc(100vh - 80px)' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default OrgDashboard
