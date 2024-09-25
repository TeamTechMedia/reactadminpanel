import { MetricsCard } from "@/components/ui/utility/MetricsCard";
import { getDealerMetrics } from "@/functions/dealers/get-dealer-metrics";
import { DealerContext } from "@/pages/dealers";
import { Grid } from "@mui/material";
import { useContext } from "react";

export const DealerMetrics = () => {
  const { data } = useContext(DealerContext) || {};
  const {
    totalUsers = 0,
    unverifiedUsers = 0,
    verifiedUsers = 0,
    suspendedUsers = 0,
  } = data?.data || {};

  const metrics = getDealerMetrics({
    totalUsers,
    unverifiedUsers,
    verifiedUsers,
    suspendedUsers,
  });

  return (
    <Grid container spacing={2} mt={4} justifyContent="space-between">
      {metrics.map(({ icon, label, value }) => (
        <MetricsCard key={label} icon={icon} label={label} value={value} />
      ))}
    </Grid>
  );
};
