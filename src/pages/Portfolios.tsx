import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Users, Palette, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Portfolios = () => {
  const portfolios = [
    {
      id: 1,
      artistName: "Sarah Chen",
      artworkCount: 12,
      totalValue: "$156,000",
      investors: 24,
      performance: "+18.5%",
      status: "Active",
      visibility: "Public"
    },
    {
      id: 2,
      artistName: "Alex Morgan",
      artworkCount: 8,
      totalValue: "$89,400",
      investors: 15,
      performance: "+12.3%",
      status: "Active",
      visibility: "Private"
    },
    {
      id: 3,
      artistName: "Maya Patel",
      artworkCount: 15,
      totalValue: "$203,700",
      investors: 38,
      performance: "+24.7%",
      status: "Featured",
      visibility: "Public"
    }
  ];

  const fractionalInvestments = [
    {
      id: 1,
      artwork: "Digital Renaissance",
      totalValue: "$125,000",
      ownedPercentage: "100%",
      investors: 45,
      minInvestment: "$500",
      currentPrice: "$2,777"
    },
    {
      id: 2,
      artwork: "Cosmic Reflections",
      totalValue: "$98,500",
      ownedPercentage: "85%",
      investors: 32,
      minInvestment: "$300",
      currentPrice: "$2,630"
    },
    {
      id: 3,
      artwork: "Urban Symphony",
      totalValue: "$87,200",
      ownedPercentage: "92%",
      investors: 28,
      minInvestment: "$400",
      currentPrice: "$2,830"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Portfolio & Fractals</h1>
            <p className="text-muted-foreground">
              Manage artist portfolios and fractional investment distribution
            </p>
          </div>
          <Button className="bg-gradient-primary">
            Create Portfolio
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">42</div>
                  <p className="text-sm text-muted-foreground">Active Portfolios</p>
                </div>
                <Palette className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">$2.4M</div>
                  <p className="text-sm text-muted-foreground">Total Investment</p>
                </div>
                <DollarSign className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">1,847</div>
                  <p className="text-sm text-muted-foreground">Active Investors</p>
                </div>
                <Users className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">+16.7%</div>
                  <p className="text-sm text-muted-foreground">Avg Performance</p>
                </div>
                <TrendingUp className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Artist Portfolios */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Artist Portfolios
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-1 h-3 w-3" />
                    Filter
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolios.map((portfolio) => (
                  <div key={portfolio.id} className="flex items-center justify-between p-4 rounded-lg border bg-gradient-to-r from-muted/20 to-transparent">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{portfolio.artistName}</h3>
                        <Badge variant={portfolio.status === "Featured" ? "default" : "outline"}>
                          {portfolio.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {portfolio.artworkCount} artworks • {portfolio.investors} investors
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {portfolio.visibility}
                      </Badge>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-bold text-lg">{portfolio.totalValue}</p>
                      <Badge className="bg-success text-success-foreground">
                        {portfolio.performance}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fractional Investments */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Fractional Investment Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fractionalInvestments.map((investment) => (
                  <div key={investment.id} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{investment.artwork}</h3>
                      <Badge className="bg-primary text-primary-foreground">
                        {investment.ownedPercentage} Owned
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Value</p>
                        <p className="font-semibold">{investment.totalValue}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Investors</p>
                        <p className="font-semibold">{investment.investors}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Min Investment</p>
                        <p className="font-semibold">{investment.minInvestment}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Price</p>
                        <p className="font-semibold">{investment.currentPrice}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Portfolios;