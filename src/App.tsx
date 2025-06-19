import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import { AuthProvider } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";
import ServerError from "./pages/errors/ServerError";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/server-error" element={<ServerError />} />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
