
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Home, Server, FileText, CreditCard, 
  Settings, HelpCircle, Users, PenTool,
  BarChart3
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  const { isAdmin } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <aside className="admin-sidebar p-4 h-screen overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 p-2">
        <img 
          src="/lovable-uploads/b6227ae5-fade-458d-b4e9-27a0bed3ca08.png" 
          alt="CherryHost Logo" 
          className="h-10" 
        />
        <span className="text-white text-xl font-bold">CherryHost</span>
      </div>
      
      <nav className="space-y-1">
        <Link to="/dashboard" className={`admin-sidebar-link ${isActive("/dashboard") ? "active" : ""}`}>
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link to="/dashboard/servers" className={`admin-sidebar-link ${isActive("/dashboard/servers") ? "active" : ""}`}>
          <Server size={20} />
          <span>My Servers</span>
        </Link>
        <Link to="/dashboard/invoices" className={`admin-sidebar-link ${isActive("/dashboard/invoices") ? "active" : ""}`}>
          <FileText size={20} />
          <span>Invoices</span>
        </Link>
        <Link to="/dashboard/billing" className={`admin-sidebar-link ${isActive("/dashboard/billing") ? "active" : ""}`}>
          <CreditCard size={20} />
          <span>Billing</span>
        </Link>
        <Link to="/dashboard/support" className={`admin-sidebar-link ${isActive("/dashboard/support") ? "active" : ""}`}>
          <HelpCircle size={20} />
          <span>Support</span>
        </Link>
        
        {isAdmin && (
          <>
            <div className="pt-6 pb-2 px-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </p>
            </div>
            <Link to="/admin/users" className={`admin-sidebar-link ${isActive("/admin/users") ? "active" : ""}`}>
              <Users size={20} />
              <span>Users</span>
            </Link>
            <Link to="/admin/blog" className={`admin-sidebar-link ${isActive("/admin/blog") ? "active" : ""}`}>
              <PenTool size={20} />
              <span>Blog</span>
            </Link>
            <Link to="/admin/analytics" className={`admin-sidebar-link ${isActive("/admin/analytics") ? "active" : ""}`}>
              <BarChart3 size={20} />
              <span>Analytics</span>
            </Link>
            <Link to="/admin/settings" className={`admin-sidebar-link ${isActive("/admin/settings") ? "active" : ""}`}>
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </>
        )}
      </nav>
      
      <div className="mt-auto pt-6">
        <div className="glass-card bg-cherry-900/20 p-4">
          <h4 className="text-white font-medium mb-2">Need help?</h4>
          <p className="text-white/70 text-sm">Our support team is here 24/7</p>
          <Link 
            to="/dashboard/support" 
            className="mt-2 text-cherry-400 text-sm font-medium hover:underline block"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
