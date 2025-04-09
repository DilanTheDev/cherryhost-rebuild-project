import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Clock, Users, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  ram_gb: number;
  storage_gb: number;
  cpu_model: string;
  cpu_cores: number;
  bandwidth_tb: number;
  is_premium: boolean;
}

const PackageCard = ({ 
  plan, 
  bestChoice = false,
  type = "skeleton"
}: { 
  plan: Plan;
  bestChoice?: boolean;
  type?: "skeleton" | "creeper" | "slime" | "pigman";
}) => {
  return (
    <div className={`relative rounded-xl bg-gradient-to-br from-midnight to-black border ${bestChoice ? 'border-cyan-400' : 'border-white/10'}`}>
      <div className="p-6 flex flex-col">
        {bestChoice && (
          <div className="absolute top-0 right-0 bg-cyan-400 text-black text-xs font-bold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            BEST CHOICE
          </div>
        )}
        
        <div className="mb-4">
          <div className={`inline-block px-3 py-1 rounded-full text-white ${type === 'slime' ? 'bg-green-600' : type === 'creeper' ? 'bg-green-700' : type === 'pigman' ? 'bg-pink-700' : 'bg-gray-700'}`}>
            <span className="font-semibold">{plan.name}</span>
          </div>
        </div>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-bold text-white">{plan.ram_gb}GB</span>
          <span className="text-white/70">RAM</span>
        </div>
        
        <p className="text-white/70 text-sm mb-6 min-h-[60px]">
          {plan.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-baseline gap-1">
            <span className="text-white/70 text-sm">Starting at</span>
            <span className="text-white text-xl font-bold">${plan.price.toFixed(2)}</span>
            <span className="text-white/70 text-sm">/mo</span>
          </div>
          
          <a href="https://billing.cherryhost.top" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium">
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const getTypeForPlan = (index: number, model: string) => {
    const types = ["skeleton", "creeper", "slime", "pigman"];
    if (model.includes("Ryzen")) {
      return types[index % 2 + 2]; // Use slime or pigman for premium plans
    }
    return types[index % 2]; // Use skeleton or creeper for standard plans
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data, error } = await supabase
          .from('plans')
          .select('*')
          .order('ram_gb', { ascending: true });
          
        if (error) throw error;
        
        setPlans(data as Plan[]);
      } catch (err: any) {
        console.error("Error fetching plans:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPlans();
  }, []);

  return (
    <div className="bg-midnight py-16" id="packages">
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
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                  <PackageCard
                    key={plan.id}
                    plan={plan}
                    bestChoice={plan.name === "Cherry Pie"}
                    type={getTypeForPlan(index, plan.cpu_model) as any}
                  />
                ))}
              </div>
            )}
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="border-bright text-bright hover:bg-bright hover:text-black">
                Show all packages
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="modded" className="mt-0">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.filter(p => p.ram_gb >= 4).map((plan, index) => (
                  <PackageCard
                    key={plan.id}
                    plan={plan}
                    bestChoice={plan.name === "Black Cherry"}
                    type={getTypeForPlan(index, plan.cpu_model) as any}
                  />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="smp" className="mt-0">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.filter(p => p.ram_gb >= 6).map((plan, index) => (
                  <PackageCard
                    key={plan.id}
                    plan={plan}
                    bestChoice={plan.name === "Wild Cherry"}
                    type={getTypeForPlan(index, plan.cpu_model) as any}
                  />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="modpacks" className="mt-0">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-400">
                Failed to load plans. Please try again later.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.filter(p => p.is_premium).map((plan, index) => (
                  <PackageCard
                    key={plan.id}
                    plan={plan}
                    bestChoice={plan.name === "Cherry Bomb"}
                    type={getTypeForPlan(index, plan.cpu_model) as any}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Packages;
