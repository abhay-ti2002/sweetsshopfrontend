import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated }) => {
  // If user is not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  // If logged in, show the page (children)
  return <Outlet />;
};

export default ProtectedRoute;
