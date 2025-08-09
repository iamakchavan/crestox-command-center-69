import { useState, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "@/types";
import { foundersData, advisorsData, jobOpeningsData, companyCulture, legalInfo } from "@/data/aboutData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  X, 
  Home, 
  ChevronRight, 
  Palette, 
  Users, 
  TrendingUp, 
  Upload, 
  Eye, 
  DollarSign,
  ArrowRight,
  Coins,
  BarChart3,
  ShoppingCart,
  Phone,
  GraduationCap,
  Star,
  Building2,
  Award,
  MapPin,
  Clock,
  CheckCircle,
  Heart,
  Target,
  Lightbulb,
  Shield,
  BookOpen,
  Coffee,
  FileText,
  Scale,
  Calendar,
  ExternalLink,
  AlertCircle
} from "lucide-react";

// Mock user data - will be replaced with actual auth later
const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "",
  role: "collector",
  isLoggedIn: false
};

const AboutPage = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setUser({ ...user, isLoggedIn: false });
  }, [user]);

  const handleNavigate = useCallback((path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  }, [navigate]);

  const handleSignUp = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header - Reused from HomePage */}
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
                className="text-foreground font-medium"
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
                  className="justify-start text-foreground font-medium"
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
        <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
              <button 
                onClick={() => handleNavigate("/")}
                className="flex items-center hover:text-foreground transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </button>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">About</span>
            </nav>

            {/* Page Title */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                About <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Crestox</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Discover the revolutionary platform that's democratizing art investment through portfolio tokenization and fractional ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Content Area */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="crestox" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="crestox" className="text-sm">Crestox</TabsTrigger>
                <TabsTrigger value="founding-partners" className="text-sm">Founding Partners</TabsTrigger>
                <TabsTrigger value="advisory-board" className="text-sm">Advisory Board</TabsTrigger>
                <TabsTrigger value="careers" className="text-sm">Careers</TabsTrigger>
                <TabsTrigger value="tax-legal" className="text-sm">Tax & Legal</TabsTrigger>
              </TabsList>

              {/* Crestox Tab Content */}
              <TabsContent value="crestox" className="mt-8">
                <div className="space-y-16">
                  {/* What is Crestox? Section */}
                  <div className="text-center space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold">What is Crestox?</h2>
                      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A revolutionary platform democratizing art investment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                      <Card className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <Palette className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">Art Portfolio Tokenization</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-center">
                            We transform an artist's entire body of work into a single, investable asset represented by digital tokens called 'Fractals'.
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <Users className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">Fractional Ownership</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-center">
                            Investors can buy and sell Fractals, making it possible to own a piece of a valuable art portfolio without purchasing an entire artwork.
                          </CardDescription>
                        </CardContent>
                      </Card>

                      <Card className="group hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-xl">A Liquid Art Market</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-center">
                            Our platform provides a dynamic secondary market for trading Fractals, unlocking the value of art and providing liquidity.
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  {/* Why Crestox? Section */}
                  <div className="space-y-8">
                    <div className="text-center space-y-4">
                      <h2 className="text-3xl font-bold">Why Crestox?</h2>
                      <p className="text-xl text-muted-foreground">
                        A win-win ecosystem for creators and collectors.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* For Artists */}
                      <div className="space-y-6">
                        <div className="text-center lg:text-left">
                          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <Palette className="w-6 h-6 text-primary" />
                            For Artists
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-primary" />
                                Access Capital
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Raise funds based on your entire portfolio, not just single pieces, giving you the freedom to create.
                              </CardDescription>
                            </CardContent>
                          </Card>

                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <Eye className="w-5 h-5 text-primary" />
                                Global Reach
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Connect with a worldwide network of collectors and investors who believe in your long-term vision.
                              </CardDescription>
                            </CardContent>
                          </Card>

                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-primary" />
                                Market Validation
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Receive a data-driven valuation and build a track record in the art market, boosting your career.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      {/* For Investors */}
                      <div className="space-y-6">
                        <div className="text-center lg:text-left">
                          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            For Investors
                          </h3>
                        </div>
                        
                        <div className="space-y-4">
                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <Coins className="w-5 h-5 text-primary" />
                                Diversify Your Portfolio
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Invest in a new, resilient asset class that has historically been inaccessible to most.
                              </CardDescription>
                            </CardContent>
                          </Card>

                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                Support Emerging Talent
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Become a patron of the arts by directly funding the careers of promising artists you believe in.
                              </CardDescription>
                            </CardContent>
                          </Card>

                          <Card className="border-l-4 border-l-primary">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-lg flex items-center gap-2">
                                <ShoppingCart className="w-5 h-5 text-primary" />
                                Unlock a Liquid Market
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Easily buy, sell, and trade your art investments on our secondary market, unlike traditional art.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* How Crestox Works Section - Enhanced Modern Design */}
                  <div className="relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl"></div>
                    <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                    
                    <div className="relative space-y-16 p-8 lg:p-16">
                      <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                          <Lightbulb className="w-4 h-4" />
                          Simple Process
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                          How Crestox Works
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                          A simple, transparent process that connects emerging artists with investors worldwide through innovative technology
                        </p>
                      </div>

                      {/* Process Flow Visualization */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24">
                        {/* For Artists Journey */}
                        <div className="space-y-8">
                          <div className="text-center xl:text-left">
                            <div className="inline-flex items-center gap-3 mb-6">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                                <Palette className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <h3 className="text-3xl font-bold">For Artists</h3>
                            </div>
                          </div>
                          
                          <div className="relative space-y-8">
                            {/* Connecting Line */}
                            <div className="absolute left-8 top-16 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block"></div>
                            
                            {/* Step 1 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">1</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <Upload className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">List Artwork</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Upload your portfolio with high-quality images and detailed descriptions of your artistic journey.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Portfolio Upload</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">2</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <BarChart3 className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">Get Rated</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Our expert panel evaluates your work based on artistic potential, technique, and market trends.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Expert Evaluation</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">3</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <DollarSign className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">Raise Funds</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Once approved, investors can purchase shares in your portfolio, providing you with capital to grow.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Investment Ready</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* For Investors Journey */}
                        <div className="space-y-8">
                          <div className="text-center xl:text-left">
                            <div className="inline-flex items-center gap-3 mb-6">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                                <TrendingUp className="w-6 h-6 text-primary-foreground" />
                              </div>
                              <h3 className="text-3xl font-bold">For Investors</h3>
                            </div>
                          </div>
                          
                          <div className="relative space-y-8">
                            {/* Connecting Line */}
                            <div className="absolute left-8 top-16 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block"></div>
                            
                            {/* Step 1 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">1</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <Eye className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">Browse</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Explore hundreds of curated artist portfolios with expert ratings and performance data.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Curated Portfolios</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">2</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <Coins className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">Invest</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Purchase shares starting at just $50 in portfolios that match your investment strategy.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>From $50 minimum</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                              <div className="flex gap-6 items-start">
                                <div className="relative z-10 flex-shrink-0">
                                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                                    <span className="text-xl font-bold text-primary-foreground">3</span>
                                  </div>
                                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                </div>
                                <div className="flex-1 pt-2">
                                  <Card className="group-hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-card to-card/50">
                                    <CardContent className="p-6">
                                      <div className="flex items-center gap-3 mb-3">
                                        <ShoppingCart className="w-6 h-6 text-primary" />
                                        <h4 className="text-xl font-bold">Trade Shares</h4>
                                      </div>
                                      <p className="text-muted-foreground leading-relaxed">
                                        Buy and sell shares on our secondary market as portfolio values appreciate over time.
                                      </p>
                                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Liquid Secondary Market</span>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="text-center pt-8">
                        <div className="inline-flex flex-col sm:flex-row gap-4">
                          <Button size="lg" className="group px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-primary/5">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="founding-partners" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Founding Partners</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Meet the visionary leaders behind Crestox who are revolutionizing the art investment landscape.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {foundersData.map((founder) => (
                      <Card key={founder.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <CardHeader className="text-center pb-4">
                          <div className="relative mx-auto mb-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                              <img
                                src={founder.imageUrl}
                                alt={founder.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <Star className="w-4 h-4 text-primary-foreground" />
                            </div>
                          </div>
                          <CardTitle className="text-2xl">{founder.name}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {founder.title}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm">{founder.education}</span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {founder.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                              Expertise
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {founder.expertise.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="w-4 h-4" />
                              <span className="text-sm">Contact: {founder.contact}</span>
                            </div>
                            <Button variant="outline" size="sm" className="group/btn">
                              Connect
                              <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center pt-8">
                    <Card className="max-w-2xl mx-auto bg-muted/30">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-4">Join Our Journey</h3>
                        <p className="text-muted-foreground mb-6">
                          Interested in partnering with us or learning more about our vision? 
                          We'd love to hear from you.
                        </p>
                        <Button onClick={() => handleNavigate("/contact")} className="group">
                          Get in Touch
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advisory-board" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Advisory Board</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Our distinguished advisors bring decades of expertise in art, technology, finance, and legal domains to guide Crestox's strategic direction.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {advisorsData.map((advisor) => (
                      <Card key={advisor.id} className="group hover:shadow-lg transition-all duration-300 h-full">
                        <CardHeader className="text-center pb-4">
                          <div className="relative mx-auto mb-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-primary/20 group-hover:border-primary/40 transition-colors">
                              <img
                                src={advisor.imageUrl}
                                alt={advisor.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Award className="w-3 h-3 text-primary-foreground" />
                            </div>
                          </div>
                          <CardTitle className="text-xl">{advisor.name}</CardTitle>
                          <CardDescription className="font-medium text-primary">
                            {advisor.title}
                          </CardDescription>
                          <div className="flex items-center justify-center gap-1 text-muted-foreground mt-1">
                            <Building2 className="w-3 h-3" />
                            <span className="text-sm">{advisor.company}</span>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4 flex-1">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {advisor.bio}
                          </p>

                          <div className="space-y-2">
                            <h4 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground">
                              Areas of Expertise
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {advisor.expertise.map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Separator />

                  <div className="text-center space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">Join Our Advisory Network</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        We're always looking for experienced professionals who share our vision of democratizing art investment. 
                        If you have expertise in art, finance, technology, or legal domains, we'd love to explore collaboration opportunities.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                      <Card className="p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Palette className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Art & Culture</h4>
                        <p className="text-sm text-muted-foreground">
                          Curators, art historians, and industry experts
                        </p>
                      </Card>

                      <Card className="p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Finance & Investment</h4>
                        <p className="text-sm text-muted-foreground">
                          Investment professionals and financial advisors
                        </p>
                      </Card>

                      <Card className="p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <BarChart3 className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Technology & Legal</h4>
                        <p className="text-sm text-muted-foreground">
                          Tech innovators and legal compliance experts
                        </p>
                      </Card>
                    </div>

                    <Button onClick={() => handleNavigate("/contact")} size="lg" className="group">
                      Become an Advisor
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="careers" className="mt-8">
                <div className="space-y-12">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Join Our Team</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Be part of the revolution that's democratizing art investment and empowering artists worldwide.
                    </p>
                  </div>

                  {/* Company Culture Section */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Our Culture & Values</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        {companyCulture.mission}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {companyCulture.values.map((value, index) => {
                        const icons = [Lightbulb, Shield, Heart, Users, BookOpen];
                        const Icon = icons[index % icons.length];
                        return (
                          <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-sm font-medium">{value}</p>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Current Job Openings */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
                      <p className="text-muted-foreground">
                        Explore exciting opportunities to shape the future of art investment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {jobOpeningsData.map((job) => (
                        <Card key={job.id} className="group hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {job.title}
                              </CardTitle>
                              <Badge variant="secondary" className="capitalize">
                                {job.type}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building2 className="w-4 h-4" />
                                <span>{job.department}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{job.posted.toLocaleDateString()}</span>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {job.description}
                            </p>

                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">Key Requirements:</h4>
                              <ul className="space-y-1">
                                {job.requirements.slice(0, 3).map((req, index) => (
                                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                                {job.requirements.length > 3 && (
                                  <li className="text-sm text-muted-foreground ml-5">
                                    +{job.requirements.length - 3} more requirements
                                  </li>
                                )}
                              </ul>
                            </div>

                            <div className="pt-2">
                              <Button className="w-full group/btn">
                                Apply Now
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Benefits & Perks */}
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Why Work With Us?</h3>
                      <p className="text-muted-foreground">
                        We believe in taking care of our team so they can do their best work.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {companyCulture.benefits.map((benefit, index) => {
                        const icons = [DollarSign, Clock, Heart, BookOpen, Palette, Coffee];
                        const Icon = icons[index % icons.length];
                        return (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <p className="text-sm font-medium">{benefit}</p>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* Application Process */}
                  <div className="bg-muted/30 rounded-lg p-8">
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl font-semibold">Ready to Join Us?</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don't see a perfect match? We're always interested in hearing from talented individuals 
                        who are passionate about art and technology. Send us your resume and let's start a conversation.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="group">
                          View All Positions
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => handleNavigate("/contact")}>
                          Send General Application
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tax-legal" className="mt-8">
                <div className="space-y-12">
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Tax & Legal Information</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Transparency and compliance are at the core of our operations. Here's our legal and regulatory information.
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-center mb-8">Company Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold">Legal Entity</h4>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Company Name:</span> {legalInfo.companyName}</p>
                          <p><span className="font-medium">Type:</span> {legalInfo.companyType}</p>
                          <p><span className="font-medium">Incorporated:</span> {legalInfo.incorporationDate}</p>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold">Registered Address</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {legalInfo.registeredAddress}
                        </p>
                      </Card>

                      <Card className="p-6 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold">Tax Information</h4>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">G.S.T. Number:</span>
                            <Badge variant="outline" className="font-mono text-lg px-4 py-2">
                              {legalInfo.gstNumber}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  {/* Regulatory Compliance */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance</h3>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        We maintain strict compliance with all applicable laws and regulations governing our operations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                      {legalInfo.regulatoryCompliance.map((compliance, index) => (
                        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <p className="text-sm font-medium">{compliance}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Legal Policies */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">Legal Policies & Documents</h3>
                      <p className="text-muted-foreground">
                        Access our comprehensive legal documentation and policies.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                      {legalInfo.policies.map((policy, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Scale className="w-5 h-5 text-primary" />
                              </div>
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                              {policy.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Click to view document
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-amber-800">Investment Disclaimer</h4>
                        <p className="text-sm text-amber-700 leading-relaxed">
                          All investments carry risk, including the potential loss of principal. Art investments are particularly 
                          speculative and illiquid. Past performance does not guarantee future results. Please read our complete 
                          investment disclaimer and consult with a financial advisor before making any investment decisions.
                        </p>
                        <Button variant="outline" size="sm" className="mt-3 border-amber-300 text-amber-700 hover:bg-amber-100">
                          Read Full Disclaimer
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Contact for Legal Matters */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold">Legal Inquiries</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      For legal matters, compliance questions, or regulatory inquiries, please contact our legal team.
                    </p>
                    <Button variant="outline" onClick={() => handleNavigate("/contact")} className="group">
                      Contact Legal Team
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default memo(AboutPage);