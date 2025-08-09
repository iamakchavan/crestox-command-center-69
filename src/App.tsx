import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AICuratorPage from "./pages/AICuratorPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Index from "./pages/Index";
import Users from "./pages/Users";
import Artworks from "./pages/Artworks";
import Portfolios from "./pages/Portfolios";
import Transactions from "./pages/Transactions";
import Sponsorship from "./pages/Sponsorship";
import Communications from "./pages/Communications";
import Analytics from "./pages/Analytics";
import SettingsPage from "./pages/Settings";
import AuditLogs from "./pages/AuditLogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/suggestions" element={<AICuratorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<Index />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/artworks" element={<Artworks />} />
          <Route path="/admin/portfolios" element={<Portfolios />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/sponsorship" element={<Sponsorship />} />
          <Route path="/admin/communications" element={<Communications />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          <Route path="/admin/audit" element={<AuditLogs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
