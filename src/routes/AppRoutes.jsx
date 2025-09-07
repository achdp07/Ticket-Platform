import Home from '../pages/Home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Login from '../pages/Login';
import Checkout from '../pages/Checkout';
import CreateEvent from '../pages/CreateEvent';

//animation
import { AnimatePresence } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import SignupForm from '../components/auth/SignupForm';
import ProtectedRoute from './ProtectedRoute';
import OrgDashboard from '../pages/OrgDashboard';
import EventDetail from '../components/events/EventDetails';
import Dashbord from '../components/dashboard/Subpages/Dashbord';

import Projects from '../components/dashboard/Subpages/Projects'
import Team from '../components/dashboard/Subpages/Team';
import Transactions from '../components/dashboard/Subpages/Transactions';
import Calendar from '../components/dashboard/Subpages/Calendar'

import Overview from '../components/dashboard/Subpages2/Overview'
import Users from '../components/dashboard/Subpages2/Users';
import Organizers from '../components/dashboard/Subpages2/Organizers';
import Reports from '../components/dashboard/Subpages2/Reports';
import Settings from '../components/dashboard/Subpages2/Settings';
import EventCard from '../components/events/EventCard';

const AppRoutes = () => {
  const location = useLocation();

  const hideUI = ['/login', '/signup', '/admin-dashboard', '/organizer',
    '/organizer/projects', '/organizer/calendar', '/organizer/transactions', '/organizer/team',
    '/admin-dashboard/users', '/admin-dashboard/organizers', '/admin-dashboard/events', '/admin-dashboard/transactions',
    '/admin-dashboard/reports', '/admin-dashboard/settings', 

  ].includes(location.pathname);

  //ANIMATION
  const loca = useLocation();


  return (
    
    <div>
      {!hideUI && <Navbar />}

      <AnimatePresence>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route 
          path="/events" 
          element={<EventCard />
          }   
        >
          <Route path="eventdetail/:id" element={<EventDetail />} />
        </Route>
        
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />

        <Route
          path="/organizer"
          element={
            <ProtectedRoute>
              <OrgDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashbord />}  />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />}/>
          <Route path='users' element={<Users/>}/>
          <Route path='organizers' element={<Organizers/>}/>
          <Route path='Events' element={<EventDetail/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='Reports' element={<Reports/>}/>
          <Route path='Settings' element={<Settings/>}/>
          
        </Route>
      </Routes>
      </AnimatePresence>
      {!hideUI && <Footer />}
    </div>
  );
};

export default AppRoutes;
