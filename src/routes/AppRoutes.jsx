import Home from '../pages/Home';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Login from '../pages/Login';
import Events from '../pages/Events';
import Checkout from '../pages/Checkout';
import CreateEvent from '../pages/CreateEvent';

import { Routes, Route, useLocation } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import SignupForm from '../components/auth/SignupForm';
import ProtectedRoute from './ProtectedRoute';
import OrgDashboard from '../pages/OrgDashboard';
import EventDetail from '../components/events/EventDetails';

const AppRoutes = () => {
  const location = useLocation();

  const hideUI = ['/login', '/signup', '/admin-dashboard', '/organizer', '/home', '/EventDetail'].includes(location.pathname);

  return (
    <div>
      {!hideUI && <Navbar />}

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/EventDetail" element={<EventDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route
          path="/organizer"
          element={
            <ProtectedRoute>
              <OrgDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideUI && <Footer />}
    </div>
  );
};

export default AppRoutes;
