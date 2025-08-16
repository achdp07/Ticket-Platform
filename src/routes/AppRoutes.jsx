
import Home from '../pages/Home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Login from '../pages/Login';
import Events from '../pages/Events';

import { Routes, Route,useLocation } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import SignupForm from '../components/auth/SignupForm';

const AppRoutes = () => {

  const location = useLocation();

  const HideNavbarr = location.pathname === '/login' || 
  location.pathname === '/signup' || location.pathname === '/admin';
  const HideFooter = location.pathname === '/login' || 
  location.pathname === '/signup' || location.pathname === '/admin';

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
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>

      {/* Render Footer only if not on the login or signup page */}
      {!HideFooter && <Footer />}
        </div>
    </div>
  )
}

export default AppRoutes