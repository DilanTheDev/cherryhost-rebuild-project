
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  const { user, isLoading } = useAuth();

  // Show loading state if authentication state is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-midnight">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="admin-layout">
      <DashboardSidebar />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-midnight">
          <div className="container mx-auto py-6 px-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
