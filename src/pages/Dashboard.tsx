
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Server, Clock, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const { user } = useAuth();
  const [servers, setServers] = useState<any[]>([]);
  const [stats, setStats] = useState({
    activeServers: 0,
    pendingInvoices: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch user's servers
      const { data: serverData } = await supabase
        .from("servers")
        .select("*, plans(*)")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });
      
      // Fetch pending invoices
      const { data: invoiceData } = await supabase
        .from("invoices")
        .select("*")
        .eq("user_id", user?.id)
        .eq("status", "pending");

      setServers(serverData || []);
      setStats({
        activeServers: (serverData || []).filter(s => s.status === 'active').length,
        pendingInvoices: (invoiceData || []).length,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate days remaining for servers
  const getDaysRemaining = (expiresAt: string) => {
    const today = new Date();
    const expiration = new Date(expiresAt);
    const diffTime = expiration.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
        <Button className="bg-cherry-600 hover:bg-cherry-700">
          Order New Server
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="admin-card">
              <div className="flex items-center">
                <div className="bg-cherry-600/20 p-3 rounded-lg">
                  <Server size={24} className="text-cherry-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Active Servers</p>
                  <h3 className="text-2xl font-bold text-white">{stats.activeServers}</h3>
                </div>
              </div>
            </Card>
            
            <Card className="admin-card">
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <AlertTriangle size={24} className="text-yellow-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Pending Invoices</p>
                  <h3 className="text-2xl font-bold text-white">{stats.pendingInvoices}</h3>
                </div>
              </div>
            </Card>
            
            <Card className="admin-card">
              <div className="flex items-center">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Clock size={24} className="text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Total Uptime</p>
                  <h3 className="text-2xl font-bold text-white">99.9%</h3>
                </div>
              </div>
            </Card>
            
            <Card className="admin-card">
              <div className="flex items-center">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <FileText size={24} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Support Tickets</p>
                  <h3 className="text-2xl font-bold text-white">0</h3>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Your Servers</h2>
            
            {servers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers.map((server) => (
                  <Card key={server.id} className="admin-card overflow-hidden">
                    <div className="relative">
                      <div className={`absolute top-0 left-0 w-2 h-full ${
                        server.status === 'active' ? 'bg-green-500' :
                        server.status === 'pending' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      
                      <div className="pl-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-white">{server.name}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            server.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            server.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <span className="text-gray-400 text-sm">Plan:</span>
                          <span className="text-white font-medium ml-2">{server.plans.name}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div>
                            <span className="text-gray-400 text-sm">RAM:</span>
                            <span className="text-white font-medium ml-2">{server.plans.ram_gb}GB</span>
                          </div>
                          <div>
                            <span className="text-gray-400 text-sm">Storage:</span>
                            <span className="text-white font-medium ml-2">{server.plans.storage_gb}GB</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-400 text-sm">Expires in:</span>
                            <span className="text-white text-sm">{getDaysRemaining(server.expires_at)} days</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-cherry-600"
                              style={{ width: `${Math.min(100, getDaysRemaining(server.expires_at) / 30 * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="border-white/10 text-white">
                            Manage
                          </Button>
                          <Button size="sm" className="bg-cherry-600 hover:bg-cherry-700">
                            Renew
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="admin-card py-12 text-center">
                <Server size={48} className="text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Servers Yet</h3>
                <p className="text-gray-400 mb-6">Get started by ordering your first Minecraft server</p>
                <Button className="bg-cherry-600 hover:bg-cherry-700">
                  Order New Server
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
