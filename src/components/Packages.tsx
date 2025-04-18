import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Clock, Users, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
interface Plan {
  id: string;
  description: string;
  price: number;
  ram_gb: number;
  storage_gb: number;
  cpu_cores: number;
  bandwidth_tb: number;
  is_premium: boolean;
}
const PackageCard = ({
  plan,
  type = "skeleton"
}: {
  plan: Plan;
  bestChoice?: boolean;
  type?: "skeleton" | "creeper" | "slime" | "pigman";
}) => {
  return <div className="relative rounded-xl bg-gradient-to-br from-midnight to-black border border-white/10">
      <div className="p-4 sm:p-6 flex flex-col h-full">        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl sm:text-5xl font-bold text-white">{plan.ram_gb}GB</span>
          <span className="text-white/70">RAM</span>
        </div>
        
        <p className="text-white/70 text-sm mb-4 sm:mb-6 min-h-[60px]">
          {plan.description}
        </p>
        
        <div className="mt-auto space-y-3 sm:space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="text-white/70 text-sm">Starting at</span>
            <span className="text-white text-lg sm:text-xl font-bold">${plan.ram_gb.toFixed(2)}</span>
            <span className="text-white/70 text-sm">/mo</span>
          </div>
          
          <a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer">
            <Button className="w-full text-black font-medium py-2 bg-lightning-500 hover:bg-lightning-400">
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </div>;
};
const Packages = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const getTypeForPlan = (index: number) => {
    const types = ["skeleton", "creeper", "slime", "pigman"];
    if (index >= 6) {
      return types[index % 2 + 2]; // Use slime or pigman for premium plans
    }
    return types[index % 2]; // Use skeleton or creeper for standard plans
  };
  useEffect(() => {
    const mockPlans = [{
      id: "1",
      description: "Perfect for small vanilla servers with a few friends.",
      price: 4,
      // $1/GB RAM
      ram_gb: 4,
      storage_gb: 50,
      cpu_cores: 1,
      bandwidth_tb: 1,
      is_premium: false
    }, {
      id: "2",
      description: "Ideal for vanilla servers with moderate plugins.",
      price: 8,
      // $1/GB RAM
      ram_gb: 8,
      storage_gb: 75,
      cpu_cores: 1,
      bandwidth_tb: 2,
      is_premium: false
    }, {
      id: "3",
      description: "Great for modded servers and growing communities.",
      price: 12,
      // $1/GB RAM
      ram_gb: 12,
      storage_gb: 100,
      cpu_cores: 1,
      bandwidth_tb: 3,
      is_premium: true
    }, {
      id: "4",
      description: "Ultimate power for large modpacks and busy servers.",
      price: 16,
      // $1/GB RAM
      ram_gb: 16,
      storage_gb: 150,
      cpu_cores: 1,
      bandwidth_tb: 4,
      is_premium: true
    }, {
      id: "5",
      description: "For serious modpack enthusiasts with many players.",
      price: 24,
      // $1/GB RAM
      ram_gb: 24,
      storage_gb: 200,
      cpu_cores: 1,
      bandwidth_tb: 5,
      is_premium: true
    }, {
      id: "6",
      description: "Our most powerful plan for the largest communities.",
      price: 32,
      // $1/GB RAM
      ram_gb: 32,
      storage_gb: 300,
      cpu_cores: 1,
      bandwidth_tb: 10,
      is_premium: true
    }];
    setPlans(mockPlans);
    setLoading(false);
  }, []);
  return <div className="bg-midnight py-12 sm:py-16" id="packages">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Choose Your Perfect Server Package</h2>
        
        <Tabs defaultValue="vanilla" className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto">
            <TabsList className={`bg-black/30 border border-white/10 ${isMobile ? 'w-full' : ''}`}>
              <TabsTrigger value="vanilla" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white text-xs sm:text-sm">
                <Server className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Vanilla
              </TabsTrigger>
              <TabsTrigger value="modded" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white text-xs sm:text-sm">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Modded
              </TabsTrigger>
              <TabsTrigger value="smp" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                SMP
              </TabsTrigger>
              <TabsTrigger value="modpacks" className="data-[state=active]:bg-cherry-600 data-[state=active]:text-white text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Modpacks
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="vanilla" className="mt-0">
            {loading ? <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div> : error ? <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {plans.filter(p => p.id <= "4").map((plan, index) => <PackageCard key={plan.id} plan={{
              ...plan,
              description: plan.description + (plan.cpu_cores > 1 ? "" : " 1 vCPU core included with additional cores available as addons.")
            }} type={getTypeForPlan(index) as any} />)}
              </div>}
            
            <div className="flex justify-center mt-6 sm:mt-10">
              
            </div>
          </TabsContent>
          
          <TabsContent value="modded" className="mt-0">
            {loading ? <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div> : error ? <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {plans.filter(p => p.ram_gb >= 8).map((plan, index) => <PackageCard key={plan.id} plan={{
              ...plan,
              description: plan.description + (plan.cpu_cores > 1 ? "" : " 1 vCPU core included with additional cores available as addons.")
            }} type={getTypeForPlan(index + 4) as any} />)}
              </div>}
          </TabsContent>
          
          <TabsContent value="smp" className="mt-0">
            {loading ? <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div> : error ? <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {plans.filter(p => p.ram_gb >= 12).map((plan, index) => <PackageCard key={plan.id} plan={{
              ...plan,
              description: plan.description + (plan.cpu_cores > 1 ? "" : " 1 vCPU core included with additional cores available as addons.")
            }} type={getTypeForPlan(index + 2) as any} />)}
              </div>}
          </TabsContent>
          
          <TabsContent value="modpacks" className="mt-0">
            {loading ? <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div> : error ? <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {plans.filter(p => p.is_premium).map((plan, index) => <PackageCard key={plan.id} plan={{
              ...plan,
              description: plan.description + (plan.cpu_cores > 1 ? "" : " 1 vCPU core included with additional cores available as addons.")
            }} type={getTypeForPlan(index + 4) as any} />)}
              </div>}
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};
export default Packages;
