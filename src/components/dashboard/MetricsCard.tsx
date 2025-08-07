import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  description?: string;
  className?: string;
}

export function MetricsCard({
  title,
  value,
  change,
  changeType,
  icon,
  description,
  className
}: MetricsCardProps) {
  const changeColor = {
    positive: "bg-success text-success-foreground",
    negative: "bg-destructive text-destructive-foreground",
    neutral: "bg-muted text-muted-foreground"
  };

  return (
    <Card className={cn("shadow-card hover:shadow-elegant transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="flex items-center justify-between">
          <Badge className={cn("text-xs", changeColor[changeType])}>
            {change}
          </Badge>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}