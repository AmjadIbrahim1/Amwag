import { Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute() {
  let { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
