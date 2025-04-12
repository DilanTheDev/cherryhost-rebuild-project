
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Server, Clock, Users, Shield, Terminal, Cpu, Database, Gauge, FileIcon, 
  Puzzle, Package, Play, Grid, Settings, Shield as FirewallIcon, Globe, Trash } from "lucide-react";

const FeatureCard = ({ icon, title, onClick, isActive }: { icon: React.ReactNode; title: string; onClick: () => void; isActive: boolean }) => {
  return (
    <div 
      className={`glass-card p-4 flex flex-col items-center justify-center gap-3 aspect-square cursor-pointer transition-all ${isActive ? 'ring-2 ring-yellow-500 bg-yellow-900/20' : 'hover:bg-yellow-900/10'}`}
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-white text-center font-medium">{title}</p>
    </div>
  );
};

const GamePanel = () => {
  const [activePanel, setActivePanel] = useState("overview");
  
  const panels = [
    { 
      id: "overview", 
      title: "Server Overview", 
      icon: <Server className="w-6 h-6 text-yellow-500" />,
      image: "/lovable-uploads/ddc851e8-9451-4803-97ba-bc894af28da7.png",
      description: "View and manage your server's resources and status"
    },
    { 
      id: "fileManager", 
      title: "File Management", 
      icon: <FileIcon className="w-6 h-6 text-yellow-500" />,
      image: "/lovable-uploads/30c70f1f-1782-4c17-bc20-2e94c6b0102a.png",
      description: "Easy file management with drag & drop support"
    },
    { 
      id: "softwareManager", 
      title: "Software Manager", 
      icon: <Package className="w-6 h-6 text-yellow-500" />,
      image: "/lovable-uploads/a4ef7814-94fa-4fd2-a8bc-a5635639c089.png",
      description: "Install and manage server software easily" 
    },
    { 
      id: "pluginManager", 
      title: "Plugin Manager", 
      icon: <Puzzle className="w-6 h-6 text-yellow-500" />,
      image: "/lovable-uploads/09e1ab7d-f48c-4bbb-9223-be3b0697d940.png",
      description: "Install and manage server plugins instantly" 
    },
    { 
      id: "modsManager", 
      title: "Mods Manager", 
      icon: <Cpu className="w-6 h-6 text-yellow-500" />,
      description: "Install and manage server mods with ease"
    },
    { 
      id: "playersManager", 
      title: "Players Manager", 
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      description: "Manage players, permissions and bans"
    },
    { 
      id: "serverStartup", 
      title: "Server Startup", 
      icon: <Play className="w-6 h-6 text-yellow-500" />,
      description: "Configure server startup parameters and variables"
    },
    { 
      id: "serverSplitter", 
      title: "Server Splitter", 
      icon: <Grid className="w-6 h-6 text-yellow-500" />,
      description: "Split your server resources between multiple instances"
    },
    { 
      id: "serverSettings", 
      title: "Server Settings", 
      icon: <Settings className="w-6 h-6 text-yellow-500" />,
      description: "Configure and customize your server's settings"
    },
    { 
      id: "firewallPanel", 
      title: "Firewall Panel", 
      icon: <FirewallIcon className="w-6 h-6 text-yellow-500" />,
      description: "Manage server security and firewall settings"
    },
    { 
      id: "subdomains", 
      title: "Subdomains", 
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      description: "Create and manage subdomains for your server"
    },
    { 
      id: "recycleBin", 
      title: "Recycle Bin", 
      icon: <Trash className="w-6 h-6 text-yellow-500" />,
      description: "Recover deleted files and configurations"
    }
  ];

  const activeImage = panels.find(panel => panel.id === activePanel)?.image || panels[0].image;
  const activeDescription = panels.find(panel => panel.id === activePanel)?.description || "";

  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Meet the LightningHost Game Panel</h2>
        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
          Manage, edit and control everything about your Minecraft server
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Panel Display Area */}
          <div className="md:col-span-2 space-y-4">
            <div className="relative">
              <img 
                src={activeImage} 
                alt={`LightningHost Game Panel - ${panels.find(panel => panel.id === activePanel)?.title}`} 
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl shadow-black/20" 
              />
            </div>
            
            <div className="p-4 glass-card rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {panels.find(panel => panel.id === activePanel)?.title}
              </h3>
              <p className="text-white/70">{activeDescription}</p>
            </div>
            
            <div className="flex justify-center">
              <a href="https://panel.lightninghost.top" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  Try Our Game Panel
                </Button>
              </a>
            </div>
          </div>
          
          {/* Panel Selection Menu */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 gap-3 h-full max-h-[600px] overflow-y-auto pr-2 glass-card p-4 rounded-xl">
              {panels.map((panel) => (
                <FeatureCard 
                  key={panel.id}
                  icon={panel.icon} 
                  title={panel.title} 
                  onClick={() => setActivePanel(panel.id)}
                  isActive={activePanel === panel.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePanel;
