import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const Navbar = () => {
  return <div className="w-full bg-midnight sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src="/lovable-uploads/b14d89d5-320d-4ab8-bc5e-733ab34ecab2.png" alt="LightningHost Logo" className="h-8 sm:h-10 md:h-12" />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/" className="text-white hover:text-lightning-400 transition-colors text-sm lg:text-base">Home</Link>
          
          <a href="https://panel.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightning-400 transition-colors text-sm lg:text-base">Game Panel</a>
          <a href="https://billing.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightning-400 transition-colors text-sm lg:text-base">Billing</a>
          <a href="https://status.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lightning-400 transition-colors text-sm lg:text-base">Status</a>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Button size="sm" className="bg-lightning-500 hover:bg-lightning-600 text-black text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-4 h-auto">
            <Link to="/#packages">Order Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden h-8 w-8 sm:h-9 sm:w-9">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-midnight border-white/10 text-white p-0 w-[80%] sm:w-[300px]">
              <div className="flex flex-col gap-2 p-4 sm:p-6">
                <Link to="/" className="text-base sm:text-lg font-semibold hover:text-lightning-400 py-2">Home</Link>
                <Link to="/products" className="text-base sm:text-lg font-semibold hover:text-lightning-400 py-2">Products</Link>
                <a href="https://panel.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold hover:text-lightning-400 py-2">Game Panel</a>
                <a href="https://billing.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold hover:text-lightning-400 py-2">Billing</a>
                <a href="https://status.lightninghost.pro" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold hover:text-lightning-400 py-2">Status</a>
                <div className="flex flex-col gap-2 mt-4">
                  <Button className="bg-lightning-500 hover:bg-lightning-600 text-black justify-start">
                    <Link to="/#packages">Order Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>;
};
export default Navbar;