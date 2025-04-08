
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Clock, Users, Zap } from "lucide-react";

const PackageCard = ({ 
  name, 
  ram, 
  price, 
  description, 
  bestChoice = false,
  type = "skeleton"
}: { 
  name: string; 
  ram: number; 
  price: number; 
  description: string;
  bestChoice?: boolean;
  type?: "skeleton" | "creeper" | "slime" | "pigman";
}) => {
  return (
    <div className={`package-card ${type} ${bestChoice ? 'border-bright' : 'border-white/10'}`}>
      {bestChoice && <div className="best-choice">BEST CHOICE</div>}
      <div className="mb-3">
        <div className="bg-white/10 px-3 py-1 rounded-full w-fit">
          <span className="text-white font-semibold">{name}</span>
        </div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{ram}GB</span>
        <span className="text-white/70">RAM</span>
      </div>
      
      <p className="text-white/70 text-sm my-3 h-12">
        {description}
      </p>
      
      <div className="mt-4 space-y-3">
        <div className="flex items-baseline gap-1">
          <span className="text-white/70 text-sm">Starting at</span>
          <span className="text-white font-bold">${price.toFixed(2)}</span>
          <span className="text-white/70 text-sm">/mo</span>
        </div>
        
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium">
          Order Now
        </Button>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-midnight py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Perfect Server Package</h2>
        
        <Tabs defaultValue="vanilla" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/30 border border-white/10">
              <TabsTrigger value="vanilla" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white">
                <Server className="w-4 h-4 mr-2" />
                Vanilla
              </TabsTrigger>
              <TabsTrigger value="modded" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white">
                <Zap className="w-4 h-4 mr-2" />
                Modded
              </TabsTrigger>
              <TabsTrigger value="smp" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white">
                <Users className="w-4 h-4 mr-2" />
                SMP/Community
              </TabsTrigger>
              <TabsTrigger value="modpacks" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white">
                <Clock className="w-4 h-4 mr-2" />
                Modpacks
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="vanilla" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PackageCard
                name="Skeleton"
                ram={3}
                price={9.99}
                description="Start of your Minecraft journey, good for a few vanilla players."
                type="skeleton"
              />
              <PackageCard
                name="Creeper"
                ram={4}
                price={12.99}
                description="Good starter server, can host a few friends with no issues."
                type="creeper"
              />
              <PackageCard
                name="Slime"
                ram={5}
                price={15.99}
                description="The best package for vanilla or slightly modded gameplay."
                bestChoice={true}
                type="slime"
              />
              <PackageCard
                name="Pigman"
                ram={6}
                price={18.99}
                description="Safe pick for a medium sized group of vanilla or modded players."
                type="pigman"
              />
            </div>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-bright text-bright hover:bg-bright hover:text-black">
                Show all packages
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="modded" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PackageCard
                name="Blaze"
                ram={8}
                price={24.99}
                description="Discover thousands of modpacks on vanilla."
                type="skeleton"
              />
              <PackageCard
                name="Breeze"
                ram={10}
                price={29.99}
                description="Can run many mods, large worlds with many players."
                type="creeper"
              />
              <PackageCard
                name="Ghost"
                ram={12}
                price={35.99}
                description="Ideal for heavy modpacks like All The Mods and biggest farms."
                bestChoice={true}
                type="slime"
              />
              <PackageCard
                name="Wither"
                ram={24}
                price={71.99}
                description="Don't worry about anything - run a community server or any modpack you'd like."
                type="pigman"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="smp" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PackageCard
                name="Shrieker"
                ram={16}
                price={42.99}
                description="For growing communities that need reliability and performance."
                type="skeleton"
              />
              <PackageCard
                name="Warden"
                ram={20}
                price={55.99}
                description="Large communities will enjoy the extra headroom and performance."
                type="creeper"
              />
              <PackageCard
                name="Ender"
                ram={28}
                price={85.99}
                description="Ultimate performance for large communities with many plugins."
                bestChoice={true}
                type="slime"
              />
              <PackageCard
                name="Dragon"
                ram={32}
                price={95.99}
                description="Our most powerful server, for the largest communities with no compromises."
                type="pigman"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="modpacks" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <PackageCard
                name="FTB"
                ram={8}
                price={24.99}
                description="Perfect for Feed The Beast modpacks with a small group of players."
                type="skeleton"
              />
              <PackageCard
                name="ATM"
                ram={12}
                price={35.99}
                description="All The Mods needs more RAM, and this package delivers."
                type="creeper"
              />
              <PackageCard
                name="RLCraft"
                ram={8}
                price={24.99}
                description="Optimized specifically for the challenging RLCraft modpack."
                bestChoice={true}
                type="slime"
              />
              <PackageCard
                name="Custom"
                ram={16}
                price={42.99}
                description="Build your own modpack with plenty of RAM for all your needs."
                type="pigman"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Packages;
