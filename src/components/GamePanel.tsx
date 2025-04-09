
import { Button } from "@/components/ui/button";
import { Server, Clock, Users, Shield, Terminal, Cpu, Database, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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

const PlanCard = ({ 
  name, 
  ram, 
  price, 
  storage,
  cpu,
  bestChoice = false 
}: { 
  name: string;
  ram: number;
  price: number;
  storage: number;
  cpu: string;
  bestChoice?: boolean;
}) => {
  return (
    <Card className={`relative rounded-xl bg-gradient-to-br from-midnight to-black border ${bestChoice ? 'border-cyan-400' : 'border-white/10'}`}>
      <CardHeader className="pb-2">
        {bestChoice && (
          <div className="absolute top-0 right-0 bg-cyan-400 text-black text-xs font-bold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            BEST CHOICE
          </div>
        )}
        <div className="mb-2">
          <div className="inline-block px-3 py-1 rounded-full text-white bg-green-600">
            <span className="font-semibold">{name}</span>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{ram}GB</span>
          <span className="text-white/70">RAM</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3 text-white/70 text-sm">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-green-400" />
          <span>{storage}GB SSD Storage</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-green-400" />
          <span>{cpu}</span>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-green-400" />
          <span>Unlimited Bandwidth</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col items-start pt-4 space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="text-white/70 text-sm">Starting at</span>
          <span className="text-white text-xl font-bold">${price.toFixed(2)}</span>
          <span className="text-white/70 text-sm">/mo</span>
        </div>
        
        <a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium">
            Order Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const GamePanel = () => {
  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Meet the CherryHost Game Panel</h2>
        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
          Manage, edit and control everything about your Minecraft server
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <PlanCard 
            name="Starter" 
            ram={4}
            storage={50}
            cpu="2 vCPU Cores"
            price={7.99}
          />
          <PlanCard 
            name="Standard" 
            ram={8}
            storage={75}
            cpu="3 vCPU Cores"
            price={13.99}
            bestChoice={true}
          />
          <PlanCard 
            name="Premium" 
            ram={12}
            storage={100}
            cpu="4 vCPU Cores"
            price={19.99}
          />
          <PlanCard 
            name="Ultimate" 
            ram={16}
            storage={150}
            cpu="6 vCPU Cores"
            price={24.99}
          />
        </div>
        
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
