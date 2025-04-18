import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Server, FileIcon, Play, Settings, Globe } from "lucide-react"; // Removed Package icon

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
      image: "https://i.imgur.com/KYnEq6g.png",
      description: "View your server's resources, console and status"
    },
    { 
      id: "fileManager", 
      title: "File Management", 
      icon: <FileIcon className="w-6 h-6 text-yellow-500" />,
      image: "https://i.imgur.com/eFqoOuA.png",
      description: "Easy file management with drag & drop support"
    },
    // Removed Software Manager panel
    { 
      id: "serverStartup", 
      title: "Server Startup", 
      icon: <Play className="w-6 h-6 text-yellow-500" />,
      image: "https://i.imgur.com/Mmt81m4.png", // Updated image
      description: "Configure server startup parameters and variables"
    },
    { 
      id: "serverSettings", 
      title: "Server Settings", 
      icon: <Settings className="w-6 h-6 text-yellow-500" />,
      image: "https://i.imgur.com/CDOXbi5.png", // Updated image
      description: "Configure and customize your server's settings"
    },
    { 
      id: "subdomains", 
      title: "Subdomains", 
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      image: "https://i.imgur.com/kTbjLYS.png", // Updated image
      description: "Create and manage subdomains for your server"
    }
  ];

  // Ensure activePanel defaults to an existing panel if the removed one was the default
  if (activePanel === "softwareManager") {
    setActivePanel("overview");
  }

  const activePanelData = panels.find(panel => panel.id === activePanel) || panels[0];
  const activeImage = activePanelData.image;
  const activeDescription = activePanelData.description;
  const activeTitle = activePanelData.title;

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
                alt={`LightningHost Game Panel - ${activeTitle}`} 
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl shadow-black/20" 
              />
            </div>
            
            <div className="p-4 glass-card rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {activeTitle}
              </h3>
              <p className="text-white/70">{activeDescription}</p>
            </div>
            
            <div className="flex justify-center">
              <a href="https://panel.lightninghost.pro" target="_blank" rel="noopener noreferrer">
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
