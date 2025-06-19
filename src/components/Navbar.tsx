import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/auth/AuthProvider";

// If using shadcn/ui, import Button and DropdownMenu primitives
// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { isAuthenticated } = useAuth();
  //console.log("isAuthenticated", isAuthenticated);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link
          to="/dashboard"
          className="flex items-center gap-2 font-bold text-lg text-primary"
        >
          <span className="text-primary pl-4">EngkoiApp</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                About
              </Link>
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors flex items-center gap-1"
                  onClick={() => setServicesOpen((open) => !open)}
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                >
                  Admin
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-44 rounded-md border bg-popover shadow-lg z-20 py-2 animate-in fade-in-0 zoom-in-95">
                    <Link
                      to="/services/web"
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      User Account
                    </Link>
                    <Link
                      to="/services/mobile"
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      User Role Management
                    </Link>
                  </div>
                )}
              </div>
              {/* Logout Button */}
              <Link
                to="/login"
                className="ml-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow"
              >
                Logout
              </Link>
            </div>
          ) : (
            // // Redirect to login if not authenticated
            // <Navigate to="/login" replace />
            <></>
          )}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-1 bg-background border-b animate-in fade-in-0 zoom-in-95">
          <Link
            to="/"
            className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          {/* Mobile Services Dropdown */}
          <div>
            <button
              className="w-full text-left px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors flex items-center gap-1"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/services/web"
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Web Development
                </Link>
                <Link
                  to="/services/mobile"
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Mobile Apps
                </Link>
                <Link
                  to="/services/design"
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  UI/UX Design
                </Link>
              </div>
            )}
          </div>
          {/* Login Button for mobile */}
          <Link
            to="/login"
            className="block px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
