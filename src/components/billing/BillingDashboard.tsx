
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Server, FileText, Settings, User } from "lucide-react";
import ServersTab from "./ServersTab";
import InvoicesTab from "./InvoicesTab";
import AccountTab from "./AccountTab";
import PaymentMethodsTab from "./PaymentMethodsTab";

const BillingDashboard = () => {
  const [credits, setCredits] = useState(0);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-gray-300">Your Credits</span>
          <span className="text-white font-bold">${credits.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Tabs defaultValue="servers" className="w-full">
            <TabsList className="bg-black/20 border border-white/10 grid grid-cols-4 mb-8">
              <TabsTrigger value="servers" className="data-[state=active]:bg-cherry-600">Servers</TabsTrigger>
              <TabsTrigger value="invoices" className="data-[state=active]:bg-cherry-600">Invoices</TabsTrigger>
              <TabsTrigger value="account" className="data-[state=active]:bg-cherry-600">Account</TabsTrigger>
              <TabsTrigger value="payment" className="data-[state=active]:bg-cherry-600">Payment</TabsTrigger>
            </TabsList>

            <TabsContent value="servers" className="space-y-8">
              <ServersTab />
            </TabsContent>
            
            <TabsContent value="invoices" className="space-y-8">
              <InvoicesTab />
            </TabsContent>
            
            <TabsContent value="account" className="space-y-8">
              <AccountTab />
            </TabsContent>
            
            <TabsContent value="payment" className="space-y-8">
              <PaymentMethodsTab />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-6">
            {/* Stats Cards */}
            <div className="glass-card p-6 flex items-center space-x-4">
              <div className="bg-black/30 p-3 rounded-lg">
                <Server size={24} className="text-bright" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Servers</p>
                <h3 className="text-white text-2xl font-bold">0</h3>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-center space-x-4">
              <div className="bg-black/30 p-3 rounded-lg">
                <FileText size={24} className="text-cherry-500" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Unpaid Invoices</p>
                <h3 className="text-white text-2xl font-bold">0</h3>
              </div>
            </div>
            
            <Button className="w-full bg-bright hover:bg-bright/90 text-black font-bold">
              Order a New Server
              <ArrowRight size={16} />
            </Button>
            
            {/* Latest News */}
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold">Latest News</h3>
                <Button variant="ghost" size="sm" className="text-bright p-0 h-auto">
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="bg-black/20 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/831f98f3-f724-4a0d-9b25-2b5846c667be.png" 
                    alt="Minecraft castle" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-white text-sm font-bold">TOP 5 Building Ideas for Minecraft</h4>
                    <p className="text-gray-400 text-xs">Discover cool and creative Minecraft builds</p>
                  </div>
                </div>
                <div className="bg-black/20 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/906c29a4-d132-4f0b-a79e-5ea2c9bbc610.png" 
                    alt="CherryHost's Birthday Week" 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-white text-sm font-bold">CherryHost's Birthday Week!</h4>
                    <p className="text-gray-400 text-xs">Discover special offers and promotions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDashboard;
