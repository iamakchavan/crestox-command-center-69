import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sparkles, 
  Brain, 
  Palette, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Menu, 
  X,
  Loader2,
  Star,
  Heart,
  Eye
} from "lucide-react";
import { User, Artwork } from "@/types";

// Mock user data
const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  role: "collector",
  isLoggedIn: false
};

// Mock AI-suggested artworks
const mockSuggestions: Artwork[] = [
  {
    id: "ai-1",
    title: "Neural Pathways",
    artist: "AI-Curated Selection",
    artistId: "ai-artist1",
    price: 340,
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 28,
    totalFractals: 50,
    description: "AI-recommended based on your preference for abstract digital art",
    tags: ["ai-curated", "abstract", "neural"],
    createdAt: new Date()
  },
  {
    id: "ai-2",
    title: "Quantum Resonance",
    artist: "AI-Curated Selection",
    artistId: "ai-artist2",
    price: 280,
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 15,
    totalFractals: 30,
    description: "Matches your interest in cosmic and mathematical patterns",
    tags: ["ai-curated", "quantum", "cosmic"],
    createdAt: new Date()
  },
  {
    id: "ai-3",
    title: "Digital Harmony",
    artist: "AI-Curated Selection",
    artistId: "ai-artist3",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop&crop=center",
    thumbnailUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=150&fit=crop&crop=center",
    fractalsAvailable: 22,
    totalFractals: 40,
    description: "Selected for your appreciation of flowing, organic forms",
    tags: ["ai-curated", "harmony", "organic"],
    createdAt: new Date()
  }
];

const AICuratorPage = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<Artwork[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);
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

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleArtworkClick = (artworkId: string) => {
    navigate(`/artwork/${artworkId}`);
  };

  const handleGenerateSuggestions = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSuggestions(mockSuggestions);
    setHasGenerated(true);
    setIsGenerating(false);
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
                className="text-foreground font-medium"
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
                  className="justify-start text-foreground font-medium"
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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AI <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Curator</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover your perfect art match with our intelligent recommendation system. 
                Our AI analyzes your preferences, browsing history, and market trends to suggest 
                artworks that resonate with your unique taste.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg"
                  onClick={handleGenerateSuggestions}
                  disabled={isGenerating}
                  className="px-8 py-4 text-lg font-semibold shadow-glow"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating Suggestions...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Suggestions
                    </>
                  )}
                </Button>
              </div>

              {/* AI Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Style Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      AI analyzes your art preferences and suggests similar styles
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Market Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Recommendations based on trending artworks and market data
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Community Driven</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn from collectors with similar tastes and preferences
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Suggestions Results */}
        {hasGenerated && suggestions.length > 0 && (
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Your AI-Curated Recommendations</h2>
                <p className="text-lg text-muted-foreground">
                  Based on your preferences, here are artworks we think you'll love
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {suggestions.map((artwork) => (
                  <Card 
                    key={artwork.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleArtworkClick(artwork.id)}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg relative">
                        <img
                          src={artwork.imageUrl}
                          alt={artwork.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            <Sparkles className="w-3 h-3 mr-1" />
                            AI Pick
                          </Badge>
                        </div>
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{artwork.title}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-muted-foreground">AI Match</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{artwork.description}</p>
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {artwork.fractalsAvailable}/{artwork.totalFractals} available
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">${artwork.price}</span>
                          <Button size="sm">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleGenerateSuggestions}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  Generate New Suggestions
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Footer Links */}
        <section className="py-12 px-4 border-t border-border">
          <div className="container mx-auto">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                By using our AI Curator, you agree to our data processing practices.
              </p>
              <div className="flex justify-center gap-6">
                <Button 
                  variant="link" 
                  className="text-sm text-muted-foreground hover:text-foreground p-0"
                  onClick={() => handleNavigate("/terms")}
                >
                  Terms of Service
                </Button>
                <Separator orientation="vertical" className="h-4" />
                <Button 
                  variant="link" 
                  className="text-sm text-muted-foreground hover:text-foreground p-0"
                  onClick={() => handleNavigate("/privacy")}
                >
                  Privacy Policy
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AICuratorPage;