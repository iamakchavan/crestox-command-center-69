import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Eye, CheckCircle, X, Flag } from "lucide-react";

const Artworks = () => {
  const artworks = [
    {
      id: 1,
      title: "Sunset Dreams",
      artist: "Sarah Chen",
      price: "$12,500",
      status: "Pending Approval",
      uploaded: "2 hours ago",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Digital Horizons",
      artist: "Alex Morgan",
      price: "$8,900",
      status: "Approved",
      uploaded: "1 day ago",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Abstract Emotions",
      artist: "Maya Patel",
      price: "$15,000",
      status: "Flagged",
      uploaded: "3 days ago",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Urban Symphony",
      artist: "Carlos Rivera",
      price: "$22,000",
      status: "Approved",
      uploaded: "5 days ago",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1551732351-6e2b999de4da?w=200&h=200&fit=crop"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-primary/10 text-primary border-primary/20";
      case "Pending Approval":
        return "bg-muted text-muted-foreground border-border";
      case "Flagged":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "Rejected":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Artwork Management</h1>
            <p className="text-muted-foreground">
              Review, approve, and manage artwork submissions on the platform
            </p>
          </div>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Artwork
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-muted-foreground">5</div>
              <p className="text-sm text-muted-foreground">Pending Approval</p>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">1,240</div>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-destructive">3</div>
              <p className="text-sm text-muted-foreground">Flagged</p>
            </CardContent>
          </Card>
          <Card className="border border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary">$2.1M</div>
              <p className="text-sm text-muted-foreground">Total Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Modern Minimal Artwork Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-muted/30 aspect-square mb-4">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`text-xs font-medium backdrop-blur-sm border-0 ${getStatusColor(artwork.status)}`}
                  >
                    {artwork.status}
                  </Badge>
                </div>
                
                {/* Minimal Hover Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button size="icon" className="h-8 w-8 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30 text-white">
                      <Eye className="h-4 w-4" />
                    </Button>
                    {artwork.status === "Pending Approval" && (
                      <>
                        <Button size="icon" className="h-8 w-8 bg-success/80 backdrop-blur-sm border-0 hover:bg-success text-white">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="icon" className="h-8 w-8 bg-destructive/80 backdrop-blur-sm border-0 hover:bg-destructive text-white">
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {artwork.status === "Flagged" && (
                      <Button size="icon" className="h-8 w-8 bg-warning/80 backdrop-blur-sm border-0 hover:bg-warning text-white">
                        <Flag className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">by {artwork.artist}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl text-foreground">{artwork.price}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                      {artwork.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  <p className="text-xs text-muted-foreground">{artwork.uploaded}</p>
                  <div className="h-1 w-12 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Artworks;