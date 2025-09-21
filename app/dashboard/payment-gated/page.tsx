import { Button } from "@/components/ui/button";
import { PricingTable, Protect } from "@clerk/nextjs";

function UpgradeCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Upgrade to Pro</h1>
        <p className="text-sm text-gray-500">
          Upgrade to Pro to access all features
        </p>
      </div>
      <div className="flex">
        <PricingTable />
      </div>
    </div>
  );
}

function ActualFeatures() {
  return <div>Yeahssssd</div>;
}

export default function PaymentGatedPage() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <Protect
        condition={(has) => {
          return !has({ plan: "free_user" });
        }}
        fallback={<UpgradeCard />}
      >
        <ActualFeatures />
      </Protect>
    </div>
  );
}
