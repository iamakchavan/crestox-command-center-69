import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Bell, Send, Eye, Flag } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Communications = () => {
  const recentMessages = [
    {
      id: 1,
      user: "Sarah Chen",
      userType: "Artist",
      subject: "Portfolio review request",
      preview: "Could you please review my latest portfolio submission...",
      time: "5 min ago",
      status: "Unread",
      priority: "Normal"
    },
    {
      id: 2,
      user: "Michael Rodriguez",
      userType: "Investor",
      subject: "Investment inquiry",
      preview: "I'm interested in investing in the Digital Renaissance collection...",
      time: "1 hour ago",
      status: "Read",
      priority: "High"
    },
    {
      id: 3,
      user: "Emma Thompson",
      userType: "Artist",
      subject: "Payment issue",
      preview: "I haven't received my commission payment for last month...",
      time: "3 hours ago",
      status: "Replied",
      priority: "High"
    }
  ];

  const emailCampaigns = [
    {
      id: 1,
      name: "Weekly Newsletter #47",
      type: "Newsletter",
      recipients: "12,847",
      sent: "Feb 15, 2024",
      openRate: "24.5%",
      clickRate: "8.2%",
      status: "Sent"
    },
    {
      id: 2,
      name: "New Artist Spotlight",
      type: "Promotional",
      recipients: "8,934",
      sent: "Feb 14, 2024",
      openRate: "31.7%",
      clickRate: "12.4%",
      status: "Sent"
    },
    {
      id: 3,
      name: "Investment Opportunity Alert",
      type: "Transactional",
      recipients: "3,456",
      sent: "Draft",
      openRate: "-",
      clickRate: "-",
      status: "Draft"
    }
  ];

  const flaggedContent = [
    {
      id: 1,
      content: "Inappropriate artwork comment",
      user: "Anonymous User",
      reported: "2 hours ago",
      reason: "Inappropriate content",
      status: "Pending Review"
    },
    {
      id: 2,
      content: "Spam message in chat",
      user: "Spam Account",
      reported: "5 hours ago",
      reason: "Spam/Promotion",
      status: "Under Investigation"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Unread":
        return "bg-warning text-warning-foreground";
      case "Read":
        return "bg-muted text-muted-foreground";
      case "Replied":
        return "bg-success text-success-foreground";
      case "Sent":
        return "bg-primary text-primary-foreground";
      case "Draft":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Normal":
        return "bg-muted text-muted-foreground";
      case "Low":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Communications</h1>
            <p className="text-muted-foreground">
              Manage chat moderation, announcements, and email campaigns
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Send Announcement
            </Button>
            <Button className="bg-gradient-primary">
              <Mail className="mr-2 h-4 w-4" />
              Create Campaign
            </Button>
          </div>
        </div>

        {/* Communication Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-warning">23</div>
                  <p className="text-sm text-muted-foreground">Unread Messages</p>
                </div>
                <MessageCircle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">89.2%</div>
                  <p className="text-sm text-muted-foreground">Email Open Rate</p>
                </div>
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-destructive">5</div>
                  <p className="text-sm text-muted-foreground">Flagged Content</p>
                </div>
                <Flag className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">24.8K</div>
                  <p className="text-sm text-muted-foreground">Active Subscribers</p>
                </div>
                <Bell className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="campaigns">Email Campaigns</TabsTrigger>
            <TabsTrigger value="moderation">Moderation</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Preview</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentMessages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{message.user}</p>
                            <Badge variant="outline" className="text-xs">
                              {message.userType}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{message.subject}</TableCell>
                        <TableCell className="text-muted-foreground max-w-64 truncate">
                          {message.preview}
                        </TableCell>
                        <TableCell>
                          <Badge className={getPriorityColor(message.priority)}>
                            {message.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(message.status)}>
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{message.time}</TableCell>
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
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Email Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Open Rate</TableHead>
                      <TableHead>Click Rate</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {emailCampaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">{campaign.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{campaign.type}</Badge>
                        </TableCell>
                        <TableCell>{campaign.recipients}</TableCell>
                        <TableCell>{campaign.openRate}</TableCell>
                        <TableCell>{campaign.clickRate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{campaign.sent}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Flagged Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {flaggedContent.map((item) => (
                    <div key={item.id} className="p-4 rounded-lg border">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{item.content}</h3>
                          <p className="text-sm text-muted-foreground">Reported by: {item.user}</p>
                        </div>
                        <Badge className="bg-warning text-warning-foreground">
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p><span className="font-medium">Reason:</span> {item.reason}</p>
                          <p><span className="font-medium">Time:</span> {item.reported}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Review</Button>
                          <Button size="sm" className="bg-destructive">Remove</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Create Platform Announcement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input placeholder="Enter announcement title..." />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Enter your announcement message..." 
                    className="min-h-32"
                  />
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex gap-2">
                    <Badge variant="outline">All Users</Badge>
                    <Badge variant="outline">Artists Only</Badge>
                    <Badge variant="outline">Investors Only</Badge>
                  </div>
                  <Button className="bg-gradient-primary">
                    <Send className="mr-2 h-4 w-4" />
                    Send Announcement
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

export default Communications;