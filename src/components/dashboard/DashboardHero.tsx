import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowRight, Sparkles, AlertTriangle, Shield, Clock } from "lucide-react";

export function DashboardHero() {
  return (
    <div className="relative overflow-hidden bg-card rounded-2xl border border-border shadow-card">
      
      <div className="relative p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                <Sparkles className="w-3 h-3 mr-1" />
                Admin Dashboard
              </Badge>
              
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Crestox Admin
                  <span className="block text-primary">Dashboard</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Manage platform operations, review content, monitor user activity, and maintain system health across the Crestox art investment platform.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                Review Queue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                System Reports
                <TrendingUp className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Pending Reviews</span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-primary font-medium">Artworks awaiting approval</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">User Reports</span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">5</p>
                  <p className="text-xs text-primary font-medium">Require attention</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 space-y-2 col-span-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">System Status</span>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-foreground">Healthy</p>
                  <p className="text-xs text-primary font-medium">All services operational • 99.9% uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}