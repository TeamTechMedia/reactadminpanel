import { DealerCardContent } from "@/views/customers/cards/content/DealerCardContent";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React, { SetStateAction } from "react";
import { DealerActivityFilterType } from "@/services/dealers/activity/get";
import { numberToINR } from "@/utils/convert-to-rs";
import { formatDateAndTime } from "@/utils/format-date-and-time";

interface Timeline {
  amount: number;
  model: string;
  variant: string;
  date: Date;
  type: string;
}

interface Props {
  timelines: Timeline[];
  value: string;
  setValue: React.Dispatch<SetStateAction<DealerActivityFilterType>>;
  heading: string;
  subHeading: string;
}

export default function ActivityLog(props: Props) {
  const { timelines, value, setValue, heading, subHeading } = props;
  return (
    <Card>
      <CardContent>
        <Grid display={"flex"} justifyContent={"space-between"}>
          <DealerCardContent heading={heading} subHeading={subHeading} />
          <Select
            size="small"
            sx={{ minWidth: 200 }}
            value={value}
            onChange={(e) =>
              setValue(e.target.value as DealerActivityFilterType)
            }
          >
            <MenuItem value={"lastWeek"}>All</MenuItem>
            <MenuItem value={"24hours"}>Last 24 Hrs</MenuItem>
          </Select>
        </Grid>
        <Divider sx={{ paddingY: 2 }} />
        <Timeline position="alternate">
          {timelines.length ? (
            timelines.map((timeline, index) => {
              const { amount, model, variant, date, type } = timeline || {};
              const content = `${numberToINR(amount ?? 0)} for a ${model} (${variant})  ${date ? `on ${formatDateAndTime(date)}` : ""} ${type ? `with type: ${type}` : ""}`;
              return (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="info" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{content}</TimelineContent>
                </TimelineItem>
              );
            })
          ) : (
            <Grid p={2} display={"flex"} justifyContent={"center"}>
              <Typography>No Data</Typography>
            </Grid>
          )}
        </Timeline>
      </CardContent>
    </Card>
  );
}
