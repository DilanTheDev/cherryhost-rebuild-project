import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const InvoicesTab = () => {
  const [invoices, setInvoices] = useState<any[]>([]);

  return (
    <div className="glass-card p-6 space-y-6">
      <Table>
        <TableHeader>
          <TableRow className="border-gray-700">
            <TableHead className="text-gray-400">Invoice #</TableHead>
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Due Date</TableHead>
            <TableHead className="text-gray-400">Total</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.length > 0 ? (
            invoices.map((invoice) => (
              <TableRow key={invoice.id} className="border-gray-700">
                <TableCell className="text-white">{invoice.number}</TableCell>
                <TableCell className="text-white">{invoice.date}</TableCell>
                <TableCell className="text-white">{invoice.dueDate}</TableCell>
                <TableCell className="text-white">${invoice.total.toFixed(2)}</TableCell>
                <TableCell className="text-white">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    invoice.status === 'Paid' ? 'bg-green-500/20 text-green-400' :
                    invoice.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="text-white border-gray-700">
                    View
                  </Button>
                  {invoice.status !== 'Paid' && (
                    <Button size="sm" className="ml-2 bg-cherry-600 hover:bg-cherry-700">
                      Pay Now
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-gray-400 py-8">
                No Records Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoicesTab;
