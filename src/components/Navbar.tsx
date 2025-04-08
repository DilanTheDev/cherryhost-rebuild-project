
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          <Link to="/support" className="text-white hover:text-cherry-400 transition-colors">Support</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-cherry-400 hover:bg-transparent transition-colors hidden md:flex">
            Login
          </Button>
          <Button className="bg-cherry-600 hover:bg-cherry-700 text-white">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
