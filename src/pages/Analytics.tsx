import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000, investments: 23000, commissions: 22000 },
    { month: 'Feb', revenue: 52000, investments: 28000, commissions: 24000 },
    { month: 'Mar', revenue: 48000, investments: 25000, commissions: 23000 },
    { month: 'Apr', revenue: 61000, investments: 35000, commissions: 26000 },
    { month: 'May', revenue: 58000, investments: 32000, commissions: 26000 },
    { month: 'Jun', revenue: 67000, investments: 39000, commissions: 28000 },
  ];

  const userActivityData = [
    { day: 'Mon', active: 1250 },
    { day: 'Tue', active: 1420 },
    { day: 'Wed', active: 1380 },
    { day: 'Thu', active: 1680 },
    { day: 'Fri', active: 1950 },
    { day: 'Sat', active: 2100 },
    { day: 'Sun', active: 1850 },
  ];

  const investmentDistribution = [
    { name: 'Digital Art', value: 45, color: '#8B5CF6' },
    { name: 'Photography', value: 25, color: '#06B6D4' },
    { name: 'Abstract', value: 20, color: '#F59E0B' },
    { name: 'Traditional', value: 10, color: '#EF4444' },
  ];

  const platformMetrics = [
    { metric: 'Total Users', value: '24,872', change: '+12.5%', changeType: 'positive' },
    { metric: 'Active Artists', value: '3,247', change: '+8.3%', changeType: 'positive' },
    { metric: 'Total Artworks', value: '12,856', change: '+24.1%', changeType: 'positive' },
    { metric: 'Investment Volume', value: '$2.4M', change: '+15.7%', changeType: 'positive' },
    { metric: 'Avg Session Time', value: '12m 34s', change: '+2.1%', changeType: 'positive' },
    { metric: 'Bounce Rate', value: '23.4%', change: '-1.8%', changeType: 'positive' },
    { metric: 'Conversion Rate', value: '5.7%', change: '+0.9%', changeType: 'positive' },
    { metric: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', changeType: 'positive' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Reports</h1>
            <p className="text-muted-foreground">
              Comprehensive analytics for revenue, user activity, and investment trends
            </p>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          {platformMetrics.map((metric, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">{metric.metric}</div>
                <div className="text-2xl font-bold text-foreground mt-1">{metric.value}</div>
                <div className={`text-sm mt-1 ${
                  metric.changeType === 'positive' ? 'text-success' : 'text-destructive'
                }`}>
                  {metric.change} vs last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Revenue Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="investments" fill="hsl(var(--primary))" name="Investments" />
                  <Bar dataKey="commissions" fill="hsl(var(--accent))" name="Commissions" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* User Activity Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Daily Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="active" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Investment Distribution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Investment Distribution by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={investmentDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      dataKey="value"
                    >
                      {investmentDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {investmentDistribution.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/10 to-transparent">
                  <div>
                    <h3 className="font-semibold">Revenue Growth</h3>
                    <p className="text-sm text-muted-foreground">Month over month</p>
                  </div>
                  <div className="text-2xl font-bold text-success">+15.7%</div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-success/10 to-transparent">
                  <div>
                    <h3 className="font-semibold">User Engagement</h3>
                    <p className="text-sm text-muted-foreground">Average session quality</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">Excellent</div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-warning/10 to-transparent">
                  <div>
                    <h3 className="font-semibold">Investment Velocity</h3>
                    <p className="text-sm text-muted-foreground">Time to full funding</p>
                  </div>
                  <div className="text-2xl font-bold text-foreground">4.2 days</div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent">
                  <div>
                    <h3 className="font-semibold">Artist Satisfaction</h3>
                    <p className="text-sm text-muted-foreground">Platform rating</p>
                  </div>
                  <div className="text-2xl font-bold text-warning">4.8/5</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;