
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const AccountTab = () => {
  const [personalDetails, setPersonalDetails] = useState({
    minecraftUsername: "",
    firstName: "",
    lastName: "",
    email: "user@example.com"
  });
  
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handlePersonalDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  const handlePersonalDetailsSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend API
    alert("Personal details saved!");
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Here you would integrate with your backend API
    alert("Password updated!");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="bg-black/20 border border-white/10 grid grid-cols-3 mb-8">
          <TabsTrigger value="details" className="data-[state=active]:bg-cherry-600">Account Details</TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-cherry-600">Billing Address</TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-cherry-600">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-white text-xl font-bold mb-6">Personal details</h3>
            <form onSubmit={handlePersonalDetailsSave} className="space-y-4">
              <div>
                <Label htmlFor="minecraftUsername" className="text-gray-300">Avatar</Label>
                <Input 
                  id="minecraftUsername" 
                  name="minecraftUsername"
                  placeholder="Enter username to get your Minecraft avatar" 
                  className="bg-black/20 border-gray-700 text-white"
                  value={personalDetails.minecraftUsername}
                  onChange={handlePersonalDetailsChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="Your first name" 
                    className="bg-black/20 border-gray-700 text-white"
                    value={personalDetails.firstName}
                    onChange={handlePersonalDetailsChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Your last name" 
                    className="bg-black/20 border-gray-700 text-white"
                    value={personalDetails.lastName}
                    onChange={handlePersonalDetailsChange}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  name="email"
                  readOnly
                  className="bg-black/30 border-gray-700 text-white"
                  value={personalDetails.email}
                />
                <p className="text-sm text-gray-400 mt-1">
                  You cannot change your email address here. Please open a <a href="#" className="text-bright">support ticket</a> if you need to change it.
                </p>
              </div>
              
              <Button type="submit" className="w-full bg-bright hover:bg-bright/90 text-black font-bold mt-4">
                Save Changes
              </Button>
            </form>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-white text-xl font-bold mb-6">Password Change</h3>
            <form onSubmit={handlePasswordSave} className="space-y-4">
              <div>
                <Label htmlFor="currentPassword" className="text-gray-300">Current Password</Label>
                <Input 
                  id="currentPassword" 
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current password" 
                  className="bg-black/20 border-gray-700 text-white"
                  value={passwords.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="newPassword" className="text-gray-300">New Password</Label>
                  <Input 
                    id="newPassword" 
                    type="password"
                    name="newPassword"
                    placeholder="Enter your new password" 
                    className="bg-black/20 border-gray-700 text-white"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your new password" 
                    className="bg-black/20 border-gray-700 text-white"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-bright hover:bg-bright/90 text-black font-bold mt-4">
                Save Changes
              </Button>
            </form>
          </div>
        </TabsContent>
        
        <TabsContent value="billing">
          <div className="glass-card p-6">
            <h3 className="text-white text-xl font-bold mb-6">Billing Address</h3>
            <p className="text-gray-400">Add your billing address information here...</p>
            {/* Billing address form would go here */}
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="glass-card p-6">
            <h3 className="text-white text-xl font-bold mb-6">Notification Preferences</h3>
            <p className="text-gray-400">Manage your notification settings here...</p>
            {/* Notification preferences would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountTab;
