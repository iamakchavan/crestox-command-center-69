import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Transactions = () => {
  const transactions = [
    {
      id: "TX001234",
      type: "Investment",
      user: "Michael Rodriguez",
      artwork: "Digital Renaissance",
      amount: "$5,000",
      status: "Completed",
      date: "2024-02-15",
      gateway: "Stripe"
    },
    {
      id: "TX001235",
      type: "Refund",
      user: "Sarah Chen",
      artwork: "Abstract Emotions",
      amount: "$2,300",
      status: "Processing",
      date: "2024-02-15",
      gateway: "PayPal"
    },
    {
      id: "TX001236",
      type: "Investment",
      user: "Emma Thompson",
      artwork: "Cosmic Reflections",
      amount: "$8,750",
      status: "Completed",
      date: "2024-02-14",
      gateway: "Bank Transfer"
    },
    {
      id: "TX001237",
      type: "Commission",
      user: "Alex Morgan",
      artwork: "Urban Symphony",
      amount: "$1,240",
      status: "Pending",
      date: "2024-02-14",
      gateway: "Stripe"
    },
    {
      id: "TX001238",
      type: "Investment",
      user: "David Park",
      artwork: "Digital Horizons",
      amount: "$12,500",
      status: "Failed",
      date: "2024-02-13",
      gateway: "PayPal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success text-success-foreground";
      case "Processing":
        return "bg-warning text-warning-foreground";
      case "Pending":
        return "bg-muted text-muted-foreground";
      case "Failed":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Investment":
        return "bg-primary/10 text-primary border-primary/20";
      case "Refund":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Commission":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Transactions</h1>
            <p className="text-muted-foreground">
              Monitor payments, refunds, and revenue tracking across the platform
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button className="bg-gradient-primary">
              <RefreshCw className="mr-2 h-4 w-4" />
              Sync Payments
            </Button>
          </div>
        </div>

        {/* Transaction Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">$456K</div>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <Badge className="bg-success text-success-foreground mt-1">+12.5%</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-warning">$12.3K</div>
              <p className="text-sm text-muted-foreground">Pending Refunds</p>
              <Badge variant="outline" className="mt-1">5 requests</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">1,247</div>
              <p className="text-sm text-muted-foreground">Total Transactions</p>
              <Badge className="bg-primary text-primary-foreground mt-1">Today: 23</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-destructive">2.1%</div>
              <p className="text-sm text-muted-foreground">Failed Rate</p>
              <Badge variant="outline" className="mt-1">Last 30 days</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Transaction Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search transactions, users, artworks..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Transaction Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="refund">Refund</SelectItem>
                  <SelectItem value="commission">Commission</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Payment Gateway" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Gateways</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Artwork</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Gateway</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getTypeColor(transaction.type)}>
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{transaction.user}</TableCell>
                    <TableCell className="text-muted-foreground">{transaction.artwork}</TableCell>
                    <TableCell className="font-semibold">{transaction.amount}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{transaction.gateway}</TableCell>
                    <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;