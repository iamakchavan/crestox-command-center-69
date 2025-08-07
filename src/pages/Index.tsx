import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { DashboardHero } from "@/components/dashboard/DashboardHero";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardHero />
        <DashboardOverview />
      </div>
    </DashboardLayout>
  );
};

export default Index;
