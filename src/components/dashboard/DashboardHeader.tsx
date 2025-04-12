
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell, Zap } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="border-b border-white/10 py-4 px-6 bg-midnight">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/e84b5a6f-3c5e-43d2-9b14-63c64bf4391b.png" 
            alt="LightningHost Logo" 
            className="h-8" 
          />
          <span className="text-white font-bold">LightningHost</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="border-white/10 text-white">
            <Bell size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
