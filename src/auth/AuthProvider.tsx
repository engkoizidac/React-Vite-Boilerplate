import { createContext, useContext, useEffect, useState } from "react";
import axios from "@/api/axios";

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
      .get("auth/protected", {})
      .then(() => {
        setIsAuthenticated(true);
        setError(null);
      })
      .catch(() => {
        setIsAuthenticated(false);
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
