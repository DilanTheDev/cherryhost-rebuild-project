
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, MoreHorizontal, Search, UserPlus, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  is_admin: boolean | null;
  created_at: string;
}

// Mock data for demonstration
const mockUsers: UserProfile[] = [
  {
    id: '1',
    full_name: 'John Doe',
    avatar_url: null,
    is_admin: true,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '2',
    full_name: 'Jane Smith',
    avatar_url: null,
    is_admin: false,
    created_at: '2025-01-02T00:00:00Z'
  }
];

const AdminUsers = () => {
  const [users, setUsers] = useState<UserProfile[]>(mockUsers);
  const [loading, setLoading] = useState(false);

  const handleToggleAdmin = async (userId: string, isCurrentlyAdmin: boolean) => {
    setUsers(users.map(u => 
      u.id === userId ? {...u, is_admin: !isCurrentlyAdmin} : u
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="admin-heading">Users</h1>
          <p className="text-gray-400">Manage users and assign permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10 text-white">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button className="bg-cherry-600 hover:bg-cherry-700">
            <UserPlus size={16} className="mr-2" />
            Add User
          </Button>
        </div>
      </div>

      <div className="admin-card overflow-hidden">
        <div className="flex justify-between mb-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              className="pl-8 bg-black/30 border-white/10 text-white"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cherry-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400">User</TableHead>
                  <TableHead className="text-gray-400">Role</TableHead>
                  <TableHead className="text-gray-400">Joined</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user.id} className="border-gray-700">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-cherry-600 flex items-center justify-center text-white overflow-hidden">
                            {user.avatar_url ? (
                              <img 
                                src={user.avatar_url} 
                                alt={user.full_name || "User"} 
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <span className="text-sm font-medium">
                                {(user.full_name || "U")[0]}
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-white">{user.full_name || "Unnamed User"}</p>
                            <p className="text-xs text-gray-400">{user.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          user.is_admin ? 'bg-cherry-600/20 text-cherry-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {user.is_admin ? "Admin" : "User"}
                        </span>
                      </TableCell>
                      <TableCell className="text-white">{formatDate(user.created_at)}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs font-bold bg-green-500/20 text-green-400">
                          Active
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="h-8 w-8 p-0 text-white hover:bg-white/10"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Reset Password</DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleToggleAdmin(user.id, user.is_admin)}
                            >
                              {user.is_admin ? "Remove Admin" : "Make Admin"}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="text-red-500 focus:text-red-500"
                            >
                              Suspend User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-gray-400">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
