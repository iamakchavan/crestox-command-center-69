import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, TrendingUp, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Sponsorship = () => {
  const sponsoredContent = [
    {
      id: 1,
      artwork: "Digital Renaissance",
      artist: "Alex Morgan",
      sponsor: "ArtTech Corp",
      duration: "30 days",
      fee: "$5,000",
      status: "Active",
      startDate: "2024-02-01",
      views: "12.5K",
      engagement: "8.2%"
    },
    {
      id: 2,
      artwork: "Cosmic Reflections",
      artist: "Maya Patel",
      sponsor: "Future Gallery",
      duration: "14 days",
      fee: "$2,800",
      status: "Pending",
      startDate: "2024-02-20",
      views: "0",
      engagement: "0%"
    },
    {
      id: 3,
      artwork: "Urban Symphony",
      artist: "Carlos Rivera",
      sponsor: "Metropolitan Arts",
      duration: "60 days",
      fee: "$8,500",
      status: "Completed",
      startDate: "2024-01-01",
      views: "45.2K",
      engagement: "12.7%"
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: "Spring Art Collection 2024",
      type: "Featured Homepage",
      budget: "$15,000",
      spent: "$12,400",
      reach: "125K",
      conversions: "234",
      status: "Active"
    },
    {
      id: 2,
      name: "Emerging Artists Spotlight",
      type: "Category Banner",
      budget: "$8,000",
      spent: "$8,000",
      reach: "67K",
      conversions: "156",
      status: "Completed"
    },
    {
      id: 3,
      name: "Digital Art Revolution",
      type: "Newsletter Feature",
      budget: "$5,500",
      spent: "$3,200",
      reach: "89K",
      conversions: "89",
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-success text-success-foreground";
      case "Pending":
        return "bg-warning text-warning-foreground";
      case "Completed":
        return "bg-primary text-primary-foreground";
      case "Expired":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sponsorship & Promotions</h1>
            <p className="text-muted-foreground">
              Manage featured content, brand partnerships, and promotional campaigns
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Campaign
            </Button>
            <Button className="bg-gradient-primary">
              <Star className="mr-2 h-4 w-4" />
              Create Sponsorship
            </Button>
          </div>
        </div>

        {/* Sponsorship Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">$89K</div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
              <Badge className="bg-success text-success-foreground mt-2">+24% vs last month</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">15</div>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <Badge variant="outline" className="mt-2">3 ending soon</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">287K</div>
                  <p className="text-sm text-muted-foreground">Total Reach</p>
                </div>
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <Badge className="bg-primary text-primary-foreground mt-2">This month</Badge>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">8.7%</div>
                  <p className="text-sm text-muted-foreground">Avg Engagement</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <Badge className="bg-success text-success-foreground mt-2">Above industry avg</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Sponsored Content */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Sponsored Content
                <Badge className="bg-warning text-warning-foreground">2 Pending</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sponsoredContent.map((content) => (
                  <div key={content.id} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{content.artwork}</h3>
                        <p className="text-sm text-muted-foreground">by {content.artist}</p>
                        <p className="text-xs text-muted-foreground">Sponsored by {content.sponsor}</p>
                      </div>
                      <Badge className={getStatusColor(content.status)}>
                        {content.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Fee</p>
                        <p className="font-semibold">{content.fee}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-semibold">{content.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Views</p>
                        <p className="font-semibold">{content.views}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Engagement</p>
                        <p className="font-semibold">{content.engagement}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Marketing Campaigns */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Marketing Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <p className="text-sm text-muted-foreground">{campaign.type}</p>
                      </div>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Budget</p>
                        <p className="font-semibold">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Spent</p>
                        <p className="font-semibold">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Reach</p>
                        <p className="font-semibold">{campaign.reach}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Conversions</p>
                        <p className="font-semibold">{campaign.conversions}</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Campaign</Button>
                        <Button size="sm" variant="outline">Edit</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Performance Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Campaign Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead>Reach</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell className="text-muted-foreground">{campaign.type}</TableCell>
                    <TableCell>{campaign.budget}</TableCell>
                    <TableCell>{campaign.spent}</TableCell>
                    <TableCell>{campaign.reach}</TableCell>
                    <TableCell>{campaign.conversions}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Manage
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

export default Sponsorship;