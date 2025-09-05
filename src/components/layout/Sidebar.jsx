import { CalendarDays, LayoutDashboard, Plus, Projector, ProportionsIcon, 
  ScanLine, 
  ShieldHalf } from 'lucide-react'
import React, { Children } from 'react'

const navigationLinks = [
  { id: 'Dashboard', 
    href: '#',
    icon: LayoutDashboard,
    current: true 
  },

  {
    id: 'Projects', 
    href: '#',
    icon: ProportionsIcon,
    current: false 
  },

  { id: 'Team', 
    href: '#', 
    icon: ShieldHalf,
    current: false 
  },


  { id: 'Calendar',
    href: '#',
    icon: CalendarDays,
    current: false 
  },

  { id: 'Transactions',
    href: '#', 
    icon: ScanLine,
    current: false 
  },

  { id: 'Create event',
    href: '#', 
    icon: Plus,
    current: false 
  },
]

export default function Sidebar() {
  return (
    <aside className='h-screen'>
      

      <div className=" transition duration-300 ease-in-out bg-white/80  
      backdrop-blur-xl border-r border-slate-200/50
      flex flex-col relative z-10 w-64 h-screen" >

        {/* Logo Section */}
        <div className="p-2 border-b border-slate-200/50">
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-r fron-blue-600 to-purple-600 rounded-xl
            flex items-center justify-center shado'>
              <a href="/"><img src="src\assets\ICON BLEU.png" alt="Logo" className='h-6 w-auto'/></a>
            </div>
        {/* conditional rendering */}
            <div>
              <h1 className='text-lg font-bold text-slate-800'>
                Sidebar
              </h1>
              <p className='text-xs text-slate-500 dark:text-white'>
                Links
              </p>
            </div>
          </div>
        </div>  

        {/* Navigation Links */}  
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
          {navigationLinks.map((link) => (
            <a key={link.id} href={link.href}
            className={`flex items-center space-x-3 p-2 rounded-lg 
            hover:bg-slate-100 dark:hover:bg-slate-800` + (link.current ? ' bg-slate-100 dark:bg-slate-800 font-medium' : ' text-slate-600 dark:text-slate-400')}>
              <link.icon className='w-5 h-5'/>
              <span>{link.id}</span>
            </a>
          ))}
        </nav>

        {/* USer profile */} 
        <div className='p-4 border-slate-200/50 dark:border-slate-700/50'>
          <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50
          '>
            <a href="/"></a><img src="https://picsum.photos/200/300"
            alt='user profile' className='w-10 h-10 rounded-full ring-2 ring-blue-500'>
            </img>

            <div className='flex-1 min-w-0'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-slate-800 '>
                  Ash Diop
                </p>
                <p className='text-xs text-slate-500 '>
                  Admin
                </p>
              </div>

            </div>
          </div>
      </div>
      </div>
    </aside>
  )
}


