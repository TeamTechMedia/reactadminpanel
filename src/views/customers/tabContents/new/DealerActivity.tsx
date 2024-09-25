import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DealerCardContent } from "../../cards/content/DealerCardContent";
import ActivityLog from "@/components/ui/log/ActivityLog";
import { useState } from "react";

interface Props {
  data: any;
}

const timelines = [
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
  {
    date: String(new Date()),
    action: "Manual bid off date for CAR",
  },
];

export const DealerActivity = (props: Props) => {
  const { data } = props;
  console.log(data, "dataCheck");
  const [filterValue, setFilterValue] = useState("all");
  const [adminFilterValue, setAdminFilterValue] = useState("all");

  return (
    <Grid>
      <Typography fontWeight={700} fontSize={18}>
        Last Login Activity
      </Typography>

      <Card sx={{ marginTop: 4 }}>
        <CardContent>
          <DealerCardContent
            heading="Account Info"
            subHeading={`Last Active on: ${new Date()} `}
          />
        </CardContent>
      </Card>
      <Typography fontWeight={700} fontSize={18} paddingY={3}>
        Activity Logs
      </Typography>
      <Grid display={"flex"}>
        <Grid container gap={2}>
          <Grid item xs={5.9}>
            <ActivityLog
              timelines={timelines}
              value={filterValue}
              setValue={setFilterValue}
              heading="Dealer Activity"
              subHeading="Activities from dealer side"
            />
          </Grid>
          <Grid item xs={5.9}>
            <ActivityLog
              timelines={timelines}
              value={adminFilterValue}
              setValue={setAdminFilterValue}
              heading="Admin Activity"
              subHeading="Activities from admin side"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
