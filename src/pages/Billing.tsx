
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingDashboard from "@/components/billing/BillingDashboard";

const Billing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BillingDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Billing;
