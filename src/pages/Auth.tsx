
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";

const Auth = () => {
  const { user, isLoading, signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  if (!isLoading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      await signUp(email, password, fullName);
      // Stay on the page after signup to show the verification message
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src="/lovable-uploads/e84b5a6f-3c5e-43d2-9b14-63c64bf4391b.png"
              alt="LightningHost Logo"
              className="h-16 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-white">Welcome to LightningHost</h1>
            <p className="text-gray-400 mt-2">
              Premium Minecraft server hosting at affordable prices
            </p>
          </div>

          <div className="glass-card">
            <Tabs defaultValue="login" className="p-4">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-white">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/30 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password" className="text-white">Password</Label>
                      <Button variant="link" className="text-lightning-400 px-0" type="button">
                        Forgot password?
                      </Button>
                    </div>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-black/30 border-white/10 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-lightning-500 hover:bg-lightning-600 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-white">Full Name</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="bg-black/30 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-white">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/30 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-white">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      className="bg-black/30 border-white/10 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-lightning-500 hover:bg-lightning-600 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating account..." : "Create account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>
              By using our services, you agree to our{" "}
              <a href="#" className="text-lightning-400 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-lightning-400 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
