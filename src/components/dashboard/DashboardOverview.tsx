import { Users, DollarSign, Palette, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { MetricsCard } from "./MetricsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function DashboardOverview() {
  const recentActivities = [
    { id: 1, type: "approval", message: "New artwork 'Sunset Dreams' awaiting approval", time: "2 minutes ago", urgent: true },
    { id: 2, type: "user", message: "Artist 'Sarah Chen' completed KYC verification", time: "15 minutes ago", urgent: false },
    { id: 3, type: "investment", message: "Major investment of $50,000 in 'Digital Horizons'", time: "1 hour ago", urgent: false },
    { id: 4, type: "flagged", message: "Content flagged for review: 'Abstract Emotions'", time: "2 hours ago", urgent: true },
  ];

  const topArtworks = [
    { id: 1, title: "Digital Renaissance", artist: "Alex Morgan", investment: "$125,000", growth: "+23%" },
    { id: 2, title: "Cosmic Reflections", artist: "Maya Patel", investment: "$98,500", growth: "+18%" },
    { id: 3, title: "Urban Symphony", artist: "Carlos Rivera", investment: "$87,200", growth: "+15%" },
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Metrics Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Performance Metrics</h2>
          <Badge variant="secondary" className="text-xs">Real-time</Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricsCard
            title="Active Users"
            value="24,872"
            change="+12.5%"
            changeType="positive"
            icon={<Users className="h-4 w-4" />}
            description="vs last month"
            className="bg-gradient-to-br from-card to-primary/5 border-primary/10"
          />
          <MetricsCard
            title="Total Investment"
            value="$2.4M"
            change="+8.2%"
            changeType="positive"
            icon={<DollarSign className="h-4 w-4" />}
            description="vs last month"
            className="bg-gradient-to-br from-card to-success/5 border-success/10"
          />
          <MetricsCard
            title="Artworks"
            value="1,245"
            change="+24"
            changeType="positive"
            icon={<Palette className="h-4 w-4" />}
            description="this week"
            className="bg-gradient-to-br from-card to-accent/20 border-accent/20"
          />
          <MetricsCard
            title="Revenue"
            value="$156K"
            change="+15.3%"
            changeType="positive"
            icon={<TrendingUp className="h-4 w-4" />}
            description="vs last month"
            className="bg-gradient-to-br from-card to-warning/10 border-warning/20"
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Enhanced Real-time Activity Feed */}
        <Card className="shadow-elegant bg-gradient-to-br from-card to-primary/5 border-primary/10">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="flex items-center gap-2">
                Recent Activity
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              </span>
              <Badge className="bg-success/10 text-success border-success/20 text-xs">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-200">
                <div className={`h-3 w-3 rounded-full mt-1.5 flex-shrink-0 ${activity.urgent ? 'bg-warning animate-pulse' : 'bg-success'}`} />
                <div className="flex-1 space-y-1.5">
                  <p className="text-sm font-medium leading-relaxed">{activity.message}</p>
                  <p className="text-xs text-muted-foreground font-medium">{activity.time}</p>
                </div>
                {activity.urgent && (
                  <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
                )}
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4 border-primary/20 hover:bg-primary/5">
              View All Activities
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Pending Approvals */}
        <Card className="shadow-elegant bg-gradient-to-br from-card to-warning/5 border-warning/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between text-lg">
              Pending Approvals
              <Badge className="bg-warning/10 text-warning border-warning/30 text-sm font-semibold">5</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:shadow-card transition-all duration-200">
                <div className="space-y-1">
                  <p className="font-semibold">Artwork Reviews</p>
                  <p className="text-sm text-muted-foreground">3 artworks waiting for approval</p>
                </div>
                <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
                  Review
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm hover:shadow-card transition-all duration-200">
                <div className="space-y-1">
                  <p className="font-semibold">KYC Verifications</p>
                  <p className="text-sm text-muted-foreground">2 users pending verification</p>
                </div>
                <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Verify
                </Button>
              </div>
            </div>
            <Separator className="my-4" />
            <Button className="w-full bg-gradient-primary hover:shadow-glow">
              View All Pending
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Top Performing Artworks */}
      <Card className="shadow-elegant bg-gradient-to-br from-card to-success/5 border-success/10">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="p-2 bg-success/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              Top Performing Artworks
            </CardTitle>
            <Badge variant="secondary" className="text-xs">This Month</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topArtworks.map((artwork, index) => (
              <div key={artwork.id} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-card/80 via-success/5 to-transparent border border-border/50 hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm shadow-glow">
                    #{index + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">{artwork.title}</p>
                    <p className="text-sm text-muted-foreground font-medium">by {artwork.artist}</p>
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-bold text-lg text-foreground">{artwork.investment}</p>
                  <Badge className="bg-gradient-success text-success-foreground border-0 shadow-sm">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {artwork.growth}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border/50">
            <Button variant="outline" className="w-full border-success/20 hover:bg-success/5">
              View All Artworks
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}