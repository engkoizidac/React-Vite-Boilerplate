import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
      hello world
    </div>
  );
}
export default App;
