import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ServersTab = () => {
  const [showInactive, setShowInactive] = useState(false);
  const [servers, setServers] = useState<any[]>([]);

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <Switch 
            id="show-inactive" 
            checked={showInactive}
            onCheckedChange={setShowInactive}
          />
          <Label htmlFor="show-inactive" className="text-white">Show inactive servers</Label>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Product</TableHead>
            <TableHead className="text-gray-400">Price</TableHead>
            <TableHead className="text-gray-400">Order Date</TableHead>
            <TableHead className="text-gray-400">Next Due Date</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {servers.length > 0 ? (
            servers.map((server) => (
              <TableRow key={server.id} className="border-gray-700">
                <TableCell className="text-white">{server.product}</TableCell>
                <TableCell className="text-white">${server.price.toFixed(2)}</TableCell>
                <TableCell className="text-white">{server.orderDate}</TableCell>
                <TableCell className="text-white">{server.dueDate}</TableCell>
                <TableCell className="text-white">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    server.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    server.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {server.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-400 py-8">
                No Records Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServersTab;
