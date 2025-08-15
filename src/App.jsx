import React from 'react'
import Navbar from './components/layout/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import EventCard from './pages/EventDetails'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import Signup from './pages/Signup'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const location = useLocation();

  const HideNavbarr = location.pathname === '/login' || location.pathname === '/signup';
  const HideFooter = location.pathname === '/login' || location.pathname === '/signup';
  
  return (
    <div className="">
      {/* Render Navbar only if not on the login page */}
      {!HideNavbarr && <Navbar />}

      
      {/* Render Navbar only if not on the signup page */}
      
      
      {/* Render Login page separately */}
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />}  />

      </Routes>

      {/* Render Footer only if not on the login or signup page */}
      {!HideFooter && <Footer />}

      </div>
    </div>
  )
}

export default App