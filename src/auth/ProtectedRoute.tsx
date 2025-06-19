import type { JSX } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { isAuthenticated, loading } = useAuth();

  console.log("ProtectedRoute isAuthenticated:", isAuthenticated);

  if (loading) {
    // You can return a spinner or null while checking auth
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
}
