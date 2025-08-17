import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute({ children, role }) {
  const { isAuthenticated, userRole } = useAuthStore();

  // 🔒 If route requires admin
  if (role === "admin") {
    if (!isAuthenticated || userRole !== "admin") {
      return <Navigate to="/login" replace />;
    }
  }

  // 🔒 If route requires any logged-in user
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Allow access
  return children;
}
