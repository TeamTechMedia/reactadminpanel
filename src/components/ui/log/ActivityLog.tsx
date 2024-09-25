import { DealerCardContent } from "@/views/customers/cards/content/DealerCardContent";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React, { SetStateAction } from "react";

interface Timeline {
  date: string;
  action: string;
}

interface Props {
  timelines: Timeline[];
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
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
            onChange={(e) => setValue(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"24"}>Last 24 Hrs</MenuItem>
          </Select>
        </Grid>
        <Divider sx={{ paddingY: 2 }} />
        <Timeline position="alternate">
          {timelines.map((timeline, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="info" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{timeline.date}</TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </CardContent>
    </Card>
  );
}
