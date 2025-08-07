import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Settings2, Users, Shield, Bell, Database, Globe } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPage = () => {
  const systemSettings = [
    { name: "Email Notifications", description: "Send system notifications via email", enabled: true },
    { name: "Auto Backups", description: "Automatically backup database daily", enabled: true },
    { name: "Maintenance Mode", description: "Enable platform maintenance mode", enabled: false },
    { name: "Debug Logging", description: "Enable detailed system logging", enabled: false },
    { name: "Two-Factor Auth", description: "Require 2FA for all admin accounts", enabled: true },
    { name: "API Rate Limiting", description: "Enable API request rate limiting", enabled: true },
  ];

  const userRoles = [
    { name: "Super Admin", users: 3, permissions: "Full system access", color: "bg-destructive" },
    { name: "Content Moderator", users: 8, permissions: "Artwork & user management", color: "bg-primary" },
    { name: "Financial Admin", users: 5, permissions: "Transaction & revenue management", color: "bg-success" },
    { name: "Marketing Manager", users: 4, permissions: "Campaigns & analytics", color: "bg-warning" },
    { name: "Support Agent", users: 12, permissions: "Customer support only", color: "bg-muted" },
  ];

  const recentChanges = [
    { user: "Admin User", action: "Updated email settings", time: "2 hours ago" },
    { user: "John Doe", action: "Created new user role", time: "1 day ago" },
    { user: "Admin User", action: "Modified payment gateway settings", time: "2 days ago" },
    { user: "Jane Smith", action: "Updated security policies", time: "3 days ago" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">
              Manage platform configuration, user roles, and system settings
            </p>
          </div>
          <Button className="bg-gradient-primary">
            <Settings2 className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="users">User Roles</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Platform Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Platform Name</label>
                    <Input defaultValue="Crestox" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Primary Domain</label>
                    <Input defaultValue="crestox.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Support Email</label>
                    <Input defaultValue="support@crestox.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Time Zone</label>
                    <Select defaultValue="utc">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">Eastern Standard Time</SelectItem>
                        <SelectItem value="pst">Pacific Standard Time</SelectItem>
                        <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>System Toggles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {systemSettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <h3 className="font-medium">{setting.name}</h3>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Roles & Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userRoles.map((role, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${role.color}`} />
                        <div>
                          <h3 className="font-semibold">{role.name}</h3>
                          <p className="text-sm text-muted-foreground">{role.permissions}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{role.users} users</Badge>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Create New Role
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Configuration Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentChanges.map((change, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium">{change.action}</p>
                          <p className="text-sm text-muted-foreground">by {change.user}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{change.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Session Timeout (minutes)</label>
                    <Input defaultValue="30" type="number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max Login Attempts</label>
                    <Input defaultValue="5" type="number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Password Min Length</label>
                    <Input defaultValue="8" type="number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">API Rate Limit (requests/minute)</label>
                    <Input defaultValue="100" type="number" />
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold">Security Policies</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Require special characters in passwords</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Enable IP whitelisting for admin accounts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Require email verification for new accounts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Enable audit logging</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>New user registrations</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment failures</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Artwork approval requests</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Security alerts</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">SMS Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Critical system alerts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>High-value transactions</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold">Database</h3>
                    <p className="text-sm text-muted-foreground">PostgreSQL 14.2</p>
                    <p className="text-sm text-success">Healthy</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold">Storage</h3>
                    <p className="text-sm text-muted-foreground">AWS S3</p>
                    <p className="text-sm text-success">Connected</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold">Email Service</h3>
                    <p className="text-sm text-muted-foreground">SendGrid</p>
                    <p className="text-sm text-success">Active</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h3 className="font-semibold">Payment Gateway</h3>
                    <p className="text-sm text-muted-foreground">Stripe + PayPal</p>
                    <p className="text-sm text-success">Operational</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    <Database className="mr-2 h-4 w-4" />
                    Run System Diagnostics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;