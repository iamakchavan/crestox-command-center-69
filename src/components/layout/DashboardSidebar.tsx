import {
  BarChart3,
  Users,
  Palette,
  TrendingUp,
  CreditCard,
  Star,
  MessageCircle,
  PieChart,
  Settings,
  FileText,
  Home
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navigationItems = [
  { title: "Overview", url: "/admin", icon: Home },
  { title: "User Management", url: "/admin/users", icon: Users },
  { title: "Artwork Management", url: "/admin/artworks", icon: Palette },
  { title: "Portfolio & Fractals", url: "/admin/portfolios", icon: TrendingUp },
  { title: "Transactions", url: "/admin/transactions", icon: CreditCard },
  { title: "Sponsorship", url: "/admin/sponsorship", icon: Star },
  { title: "Communications", url: "/admin/communications", icon: MessageCircle },
  { title: "Analytics", url: "/admin/analytics", icon: PieChart },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Audit Logs", url: "/admin/audit", icon: FileText },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarContent>
        {/* Brand Section */}
        <div className="flex h-16 items-center border-b border-sidebar-border px-4">
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-white" />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <h2 className="text-lg font-bold text-sidebar-foreground">Crestox</h2>
              <p className="text-xs text-sidebar-foreground/60">Admin Dashboard</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <SidebarGroup className="flex-1 px-2 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const active = isActive(item.url);
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton 
                            asChild 
                            isActive={active}
                            className="group transition-all duration-200"
                          >
                            <NavLink to={item.url}>
                              <item.icon className="h-4 w-4" />
                              <span className="group-data-[collapsible=icon]:sr-only">{item.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="right" 
                          className="group-data-[collapsible=expanded]:hidden"
                        >
                          {item.title}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}