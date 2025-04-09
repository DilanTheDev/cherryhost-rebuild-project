
import { useState } from "react";
import { Server, Clock, FileText, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServerWithPlan {
  id: string;
  name: string;
  status: string;
  expires_at: string;
  plans: {
    name: string;
    ram_gb: number;
    storage_gb: number;
  };
}

const Dashboard = () => {
  const [servers, setServers] = useState<ServerWithPlan[]>([]);
  const [stats, setStats] = useState({
    activeServers: 0,
    pendingInvoices: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

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
        <h1 className="text-3xl font-bold text-white">Welcome!</h1>
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
            
            <div className="admin-card py-12 text-center">
              <Server size={48} className="text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Servers Yet</h3>
              <p className="text-gray-400 mb-6">Get started by ordering your first Minecraft server</p>
              <Button className="bg-cherry-600 hover:bg-cherry-700">
                Order New Server
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
