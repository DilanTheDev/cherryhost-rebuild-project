
import { Link, useLocation } from "react-router-dom";
import { 
  Home, Server, FileText, 
  Settings, PenTool,
  BarChart3, CreditCard, Zap
} from "lucide-react";

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <aside className="admin-sidebar p-4 h-screen overflow-y-auto">
      <div className="flex items-center gap-3 mb-10 p-2">
        <img 
          src="/lovable-uploads/b14d89d5-320d-4ab8-bc5e-733ab34ecab2.png" 
          alt="LightningHost Logo" 
          className="h-10" 
        />
        <span className="text-white text-xl font-bold">LightningHost</span>
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
        <a href="https://billing.lightninghost.top" target="_blank" rel="noopener noreferrer" className="admin-sidebar-link">
          <CreditCard size={20} />
          <span>Billing</span>
        </a>
        <a href="https://panel.lightninghost.top" target="_blank" rel="noopener noreferrer" className="admin-sidebar-link">
          <Server size={20} />
          <span>Game Panel</span>
        </a>
        
        <div className="pt-6 pb-2 px-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Admin
          </p>
        </div>
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
      </nav>
      
      <div className="mt-auto pt-6">
        <div className="glass-card bg-lightning-900/20 p-4">
          <h4 className="text-white font-medium mb-2">Need help?</h4>
          <p className="text-white/70 text-sm">Our support team is here 24/7</p>
          <a 
            href="https://billing.lightninghost.pro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 text-lightning-400 text-sm font-medium hover:underline block"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
