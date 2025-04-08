
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-midnight sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/lovable-uploads/b6227ae5-fade-458d-b4e9-27a0bed3ca08.png" alt="CherryHost Logo" className="h-12" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-cherry-400 transition-colors">Home</Link>
          <Link to="/products" className="text-white hover:text-cherry-400 transition-colors">Products</Link>
          <Link to="/game-panel" className="text-white hover:text-cherry-400 transition-colors">Game Panel</Link>
          <Link to="/billing" className="text-white hover:text-cherry-400 transition-colors">Billing</Link>
          <Link to="/support" className="text-white hover:text-cherry-400 transition-colors">Support</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-cherry-400 hover:bg-transparent transition-colors hidden md:flex">
            Login
          </Button>
          <Button className="bg-cherry-600 hover:bg-cherry-700 text-white">
            Order Now
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-midnight border-white/10 text-white p-0">
              <div className="flex flex-col gap-4 p-6">
                <Link to="/" className="text-lg font-semibold hover:text-cherry-400 py-2">Home</Link>
                <Link to="/products" className="text-lg font-semibold hover:text-cherry-400 py-2">Products</Link>
                <Link to="/game-panel" className="text-lg font-semibold hover:text-cherry-400 py-2">Game Panel</Link>
                <Link to="/billing" className="text-lg font-semibold hover:text-cherry-400 py-2">Billing</Link>
                <Link to="/support" className="text-lg font-semibold hover:text-cherry-400 py-2">Support</Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="border-white/20 hover:bg-white/5 justify-start">Login</Button>
                  <Button className="bg-cherry-600 hover:bg-cherry-700 justify-start">Order Now</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
