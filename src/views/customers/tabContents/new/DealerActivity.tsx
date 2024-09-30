import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import ActivityLog from "@/components/ui/log/ActivityLog";
import { useState } from "react";
import {
  DealerActivityFilterType,
  useGetAdminActivity,
  useGetDealerActivity,
} from "@/services/dealers/activity/get";
import { useRouter } from "next/router";
import ButtonSpinner from "@/components/ui/spinner/button";

export const DealerActivity = () => {
  const [filterValue, setFilterValue] =
    useState<DealerActivityFilterType>("lastWeek");
  const [adminFilterValue, setAdminFilterValue] =
    useState<DealerActivityFilterType>("lastWeek");
  const router = useRouter();

  const { data: dealerActivity, isLoading } = useGetDealerActivity({
    id: String(router.query.id),
    filter: filterValue,
  });

  const { data: adminActivity, isLoading: isAdminLoading } =
    useGetAdminActivity({
      id: String(router.query.id),
      filter: adminFilterValue,
    });

  return (
    <Grid>
      <Typography fontWeight={700} fontSize={18}>
        Last Login Activity
      </Typography>

      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <DealerCardContent
            heading="Account Info"
            subHeading={`Last Active on: ----`}
          />
        </CardContent>
      </Card>
      <Typography fontWeight={700} fontSize={18} paddingY={3}>
        Activity Logs
      </Typography>
      <Grid display={"flex"}>
        <Grid container gap={2}>
          <Grid item xs={5.9}>
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <ActivityLog
                timelines={dealerActivity?.data?.data?.DealerActivities}
                value={filterValue}
                setValue={setFilterValue}
                heading="Dealer Activity"
                subHeading="Activities from dealer side"
              />
            )}
          </Grid>
          <Grid item xs={5.9}>
            {isAdminLoading ? (
              <ButtonSpinner />
            ) : (
              <ActivityLog
                timelines={adminActivity?.data?.data?.AdminActivities}
                value={adminFilterValue}
                setValue={setAdminFilterValue}
                heading="Admin Activity"
                subHeading="Activities from admin side"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
