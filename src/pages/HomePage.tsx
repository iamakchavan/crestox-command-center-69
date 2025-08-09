import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Artwork } from "@/types";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, TrendingUp, Upload, Palette, DollarSign, Users, Eye, ArrowRight, Menu, X } from "lucide-react";

// Mock data - will be replaced with API calls later
const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  role: "collector",
  isLoggedIn: false
};

const mockArtworks: Artwork[] = [
  {
    id: "1",
    title: "Digital Dreams",
    artist: "Alex Chen",
    artistId: "artist1",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 45,
    totalFractals: 100,
    description: "A mesmerizing digital fractal artwork",
    tags: ["digital", "abstract"],
    createdAt: new Date()
  },
  {
    id: "2",
    title: "Cosmic Patterns",
    artist: "Maria Rodriguez",
    artistId: "artist2",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 23,
    totalFractals: 50,
    description: "Inspired by cosmic phenomena",
    tags: ["cosmic", "patterns"],
    createdAt: new Date()
  },
  {
    id: "3",
    title: "Ethereal Waves",
    artist: "Sarah Kim",
    artistId: "artist3",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 67,
    totalFractals: 80,
    description: "Flowing digital art inspired by ocean waves",
    tags: ["waves", "ethereal"],
    createdAt: new Date()
  },
  {
    id: "4",
    title: "Neon Fractals",
    artist: "David Park",
    artistId: "artist4",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 12,
    totalFractals: 25,
    description: "Vibrant neon colors meet complex algorithms",
    tags: ["neon", "vibrant"],
    createdAt: new Date()
  },
  {
    id: "5",
    title: "Quantum Fields",
    artist: "Lisa Wong",
    artistId: "artist5",
    price: 380,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 33,
    totalFractals: 60,
    description: "Where science meets artistic expression",
    tags: ["quantum", "science"],
    createdAt: new Date()
  },
  {
    id: "6",
    title: "Crystal Formations",
    artist: "Michael Torres",
    artistId: "artist6",
    price: 290,
    imageUrl: "https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 18,
    totalFractals: 40,
    description: "Geometric perfection in digital form",
    tags: ["crystal", "geometric"],
    createdAt: new Date()
  }
];

// Hero carousel images with Unsplash
const heroImages = [
  { 
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop&crop=center", 
    alt: "Featured Digital Art Collection",
    title: "Digital Dreams",
    description: "Mesmerizing fractal artworks from top artists"
  },
  { 
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=500&fit=crop&crop=center", 
    alt: "Fractal Art Marketplace",
    title: "Cosmic Patterns", 
    description: "Explore the infinite beauty of mathematical art"
  },
  { 
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=500&fit=crop&crop=center", 
    alt: "Artist Portfolio Showcase",
    title: "Ethereal Waves",
    description: "Flowing digital masterpieces that captivate"
  },
  { 
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&crop=center", 
    alt: "Abstract Geometries",
    title: "Neon Fractals",
    description: "Vibrant colors meet complex algorithms"
  },
  { 
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop&crop=center", 
    alt: "Digital Landscapes",
    title: "Quantum Fields",
    description: "Where science meets artistic expression"
  },
  { 
    src: "https://images.unsplash.com/photo-1617140237060-d09a58ba8edd?w=800&h=500&fit=crop&crop=center", 
    alt: "Artistic Innovation",
    title: "Crystal Formations",
    description: "Geometric perfection in digital form"
  },
];

const HomePage = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [featuredArtworks] = useState<Artwork[]>(mockArtworks);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleStartCollecting = () => {
    navigate("/explore");
  };

  const handleBecomeArtist = () => {
    navigate("/explore?tab=artists");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleArtworkClick = (artworkId: string) => {
    navigate(`/artwork/${artworkId}`);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavigate("/")}
              className="flex items-center space-x-2"
            >
              <div className="text-2xl font-bold text-primary">Crestox</div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button 
                variant="ghost" 
                onClick={() => handleNavigate("/explore")}
                className="text-muted-foreground hover:text-foreground"
              >
                Explore
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavigate("/suggestions")}
                className="text-muted-foreground hover:text-foreground"
              >
                AI Curator
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavigate("/about")}
                className="text-muted-foreground hover:text-foreground"
              >
                About Crestox
              </Button>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {user.isLoggedIn ? (
                <>
                  <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleLogin}>
                    Login
                  </Button>
                  <Button onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <nav className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  onClick={() => handleNavigate("/explore")}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  Explore
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => handleNavigate("/suggestions")}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  AI Curator
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => handleNavigate("/about")}
                  className="justify-start text-muted-foreground hover:text-foreground"
                >
                  About Crestox
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero Section with Centered Carousel */}
        <section className="py-16 px-4">
          <div className="container mx-auto overflow-hidden">
            {/* Hero Content - Centered */}
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Crestox</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  The premier digital fractal art marketplace where collectors and artists connect. 
                  Discover, invest, and own fractional shares of stunning digital artworks.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleStartCollecting}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold shadow-glow flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Start Collecting
                </button>
                <button 
                  onClick={handleBecomeArtist}
                  className="px-8 py-4 border border-border rounded-lg hover:bg-accent transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Palette className="w-5 h-5" />
                  Become a Listed Artist
                </button>
              </div>
              
              <button 
                onClick={handleLearnMore}
                className="text-primary hover:underline font-medium flex items-center gap-2 group justify-center"
              >
                What is Crestox?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hero Carousel - Centered */}
            <div className="relative max-w-6xl mx-auto">
              <CoverflowCarousel
                images={heroImages}
                autoplayDelay={5000}
                showPagination={true}
                showNavigation={true}
                slidesPerView={3}
                spaceBetween={50}
                className="group"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-12 left-8 bg-card border border-border rounded-xl p-4 shadow-elegant backdrop-blur-sm z-10">
                <div className="text-sm text-muted-foreground">Active Artists</div>
                <div className="text-2xl font-bold text-primary">1,200+</div>
              </div>
              
              <div className="absolute -top-12 right-8 bg-card border border-border rounded-xl p-4 shadow-elegant backdrop-blur-sm z-10">
                <div className="text-sm text-muted-foreground">Artworks Sold</div>
                <div className="text-2xl font-bold text-success">$2.4M+</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artworks Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Artworks</h2>
              <p className="text-lg text-muted-foreground">
                Discover exceptional digital art pieces from our curated collection
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredArtworks.map((artwork) => (
                <Card 
                  key={artwork.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handleArtworkClick(artwork.id)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{artwork.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {artwork.fractalsAvailable}/{artwork.totalFractals} available
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">by {artwork.artist}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">${artwork.price}</span>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => handleNavigate("/explore")}
                size="lg"
                className="px-8"
              >
                View All Artworks
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;