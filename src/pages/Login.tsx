import { useState } from "react";
import axios from "../api/auth";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthProvider"; // <-- import your auth context

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- get login function from AuthProvider
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", { username, password });
      if (login) login(); // update authentication state if using context
      navigate("/dashboard"); // navigate to dashboard after login
    } catch (err) {
      navigate("/server-error");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <Card className="w-full max-w-md bg-card rounded-lg">
        <form onSubmit={handleLogin} className="space-y-6">
          <CardHeader className="space-y-1">
            <h2 className="text-2xl font-semibold">User Login</h2>
            <p className="text-sm text-muted-foreground">
              Enter your username and password to sign in
            </p>
          </CardHeader>
          <CardContent className="space-y-4 pt-8">
            <div className="space-y-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="pr-10"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-8 pb-4">
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
