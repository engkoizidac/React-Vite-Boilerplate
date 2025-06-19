import { createContext, useContext, useEffect, useState } from "react";
import axios from "@/api/auth";

type AuthContextType = {
  isAuthenticated: boolean;
  error?: string | null;
  loading: boolean;
  login?: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    setError(null);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("auth/protected", {
        withCredentials: true,
      })
      .then(() => {
        setIsAuthenticated(true);
        setError(null);
      })
      .catch((err) => {
        setIsAuthenticated(false);
        if (err.response) {
          if (err.response.status === 401) {
            setError("You are not authenticated. Please log in.");
          } else if (err.response.status === 403) {
            setError("Access forbidden.");
          } else if (err.response.status >= 500) {
            setError("Server error. Please try again later.");
          } else {
            setError("Authentication failed.");
          }
        } else if (err.request) {
          setError("No response from server. Please check your network.");
        } else {
          setError("An unexpected error occurred.");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
