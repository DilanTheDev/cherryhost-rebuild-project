
import { Button } from "@/components/ui/button";
import { Server, Clock, Users, Shield, Terminal, Cpu } from "lucide-react";

const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="glass-card p-4 flex flex-col items-center justify-center gap-3 aspect-square">
      <div className="w-12 h-12 rounded-full bg-cherry-600/20 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-white text-center font-medium">{title}</p>
    </div>
  );
};

const GamePanel = () => {
  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Meet the CherryHost Game Panel</h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Manage, edit and control everything about your Minecraft server
        </p>
        
        <div className="relative mb-12">
          <img 
            src="/lovable-uploads/ddc851e8-9451-4803-97ba-bc894af28da7.png" 
            alt="CherryHost Game Panel" 
            className="w-full h-auto rounded-xl border border-white/10 shadow-xl shadow-black/20" 
          />
          
          <div className="flex justify-center mt-8">
            <a href="https://panel.cherryhost.top" target="_blank" rel="noopener noreferrer">
              <Button className="bg-cherry-600 hover:bg-cherry-700 text-white">
                Try Our Game Panel
              </Button>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <FeatureCard 
            icon={<Server className="w-6 h-6 text-cherry-500" />} 
            title="Server Overview" 
          />
          <FeatureCard 
            icon={<Terminal className="w-6 h-6 text-cherry-500" />} 
            title="Console Any Mod & Plugin" 
          />
          <FeatureCard 
            icon={<Clock className="w-6 h-6 text-cherry-500" />} 
            title="Instant Version Switches" 
          />
          <FeatureCard 
            icon={<Users className="w-6 h-6 text-cherry-500" />} 
            title="Live Player Manager" 
          />
          <FeatureCard 
            icon={<Cpu className="w-6 h-6 text-cherry-500" />} 
            title="Modpacks Installer" 
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-cherry-500" />} 
            title="24/7 Technical Support" 
          />
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
