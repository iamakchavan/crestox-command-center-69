import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, Eye } from "lucide-react";
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

const AuditLogs = () => {
  const auditLogs = [
    {
      id: "AL001234",
      timestamp: "2024-02-15 14:32:15",
      user: "Admin User",
      action: "User Account Updated",
      target: "sarah.chen@email.com",
      details: "Updated user verification status to verified",
      ipAddress: "192.168.1.100",
      userAgent: "Chrome/119.0.0.0",
      severity: "Medium"
    },
    {
      id: "AL001235",
      timestamp: "2024-02-15 14:28:42",
      user: "John Doe",
      action: "Artwork Approved",
      target: "Digital Renaissance",
      details: "Artwork approved and made visible to investors",
      ipAddress: "192.168.1.105",
      userAgent: "Firefox/120.0.0.0",
      severity: "Low"
    },
    {
      id: "AL001236",
      timestamp: "2024-02-15 14:15:23",
      user: "Admin User",
      action: "Transaction Refunded",
      target: "TX001234",
      details: "Refunded $2,300 to user account",
      ipAddress: "192.168.1.100",
      userAgent: "Chrome/119.0.0.0",
      severity: "High"
    },
    {
      id: "AL001237",
      timestamp: "2024-02-15 13:45:11",
      user: "Jane Smith",
      action: "Role Permission Modified",
      target: "Content Moderator",
      details: "Added artwork deletion permission to role",
      ipAddress: "192.168.1.110",
      userAgent: "Safari/17.1.0",
      severity: "High"
    },
    {
      id: "AL001238",
      timestamp: "2024-02-15 13:22:08",
      user: "System",
      action: "Automated Backup",
      target: "Database",
      details: "Daily database backup completed successfully",
      ipAddress: "127.0.0.1",
      userAgent: "System Process",
      severity: "Low"
    },
    {
      id: "AL001239",
      timestamp: "2024-02-15 12:56:33",
      user: "Admin User",
      action: "User Account Suspended",
      target: "suspicious.user@email.com",
      details: "Account suspended due to fraudulent activity",
      ipAddress: "192.168.1.100",
      userAgent: "Chrome/119.0.0.0",
      severity: "Critical"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-destructive text-destructive-foreground";
      case "High":
        return "bg-warning text-warning-foreground";
      case "Medium":
        return "bg-primary text-primary-foreground";
      case "Low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getActionTypeColor = (action: string) => {
    if (action.includes("Updated") || action.includes("Modified")) {
      return "bg-primary/10 text-primary border-primary/20";
    } else if (action.includes("Approved") || action.includes("Backup")) {
      return "bg-success/10 text-success border-success/20";
    } else if (action.includes("Suspended") || action.includes("Refunded")) {
      return "bg-destructive/10 text-destructive border-destructive/20";
    } else {
      return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
            <p className="text-muted-foreground">
              Track all administrative actions and system events for compliance and security
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Logs
            </Button>
            <Button className="bg-gradient-primary">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Audit Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">2,847</div>
              <p className="text-sm text-muted-foreground">Total Events Today</p>
              <Badge className="bg-success text-success-foreground mt-1">Normal Activity</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-warning">23</div>
              <p className="text-sm text-muted-foreground">Critical Events</p>
              <Badge variant="outline" className="mt-1">Last 7 days</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">156</div>
              <p className="text-sm text-muted-foreground">Failed Login Attempts</p>
              <Badge className="bg-destructive text-destructive-foreground mt-1">-12% vs yesterday</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-foreground">15</div>
              <p className="text-sm text-muted-foreground">Active Admin Sessions</p>
              <Badge className="bg-primary text-primary-foreground mt-1">Currently Online</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Filter Audit Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search logs by user, action, or target..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="User Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="admin">Admin Users</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="api">API Calls</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Audit Logs Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Audit Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{log.user}</div>
                        <div className="text-xs text-muted-foreground truncate max-w-32">
                          {log.userAgent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getActionTypeColor(log.action)}>
                        {log.action}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-48">
                        <div className="font-medium truncate">{log.target}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {log.details}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getSeverityColor(log.severity)}>
                        {log.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{log.ipAddress}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
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

export default AuditLogs;