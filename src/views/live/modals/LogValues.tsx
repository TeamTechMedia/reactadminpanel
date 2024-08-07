import { InfoRow } from "@/components/ui/utility/InfoRow";
import { LiveTabTypes } from "@/types/live/auctions";
import { calculateTimeDifference } from "@/utils/calculate-duration";
import { calculateRemainingTime } from "@/utils/calculate-remaining-time";
import { numberToINR } from "@/utils/convert-to-rs";
import { formatDateAndTime } from "@/utils/format-date-and-time";
import { Grid } from "@mui/material";

const getValues = (type: LiveTabTypes, data: any) => {
  const isStopped = data?.status === "STOPPED";
  const isScheduled = data?.status === "SCHEDULED";
  const startTime = Date.now() as any;
  const endTime = isScheduled ? data?.bidStartTime : data?.bidEndTime;
  const remaingTime = isStopped
    ? 0
    : calculateRemainingTime(startTime, endTime);
  const isAuction = type === "auction";
  const auctionValues = [
    {
      label: "Fair Market Value",
      value: numberToINR(data?.realValue ?? 0),
    },
    {
      label: "Customer Expected Price",
      value: data?.customerPrice ? numberToINR(data?.customerPrice ?? 0) : "-",
    },
    {
      label: "Date of Auction",
      value: data?.bidStartTime ? formatDateAndTime(data?.bidStartTime) : "-",
    },
    {
      label: "Duration of Auction",
      value:
        calculateTimeDifference(data?.bidStartTime, data?.bidEndTime) + " Mins",
    },
    {
      label: "Time Remaining",
      value: remaingTime,
      isCounter: true,
    },
  ];

  const otbValues = [
    {
      label: "Customer Expected Price",
      value: data?.customerPrice ? numberToINR(data?.customerPrice ?? 0) : "-",
    },
    {
      label: "Date of OTB",
      value: data?.bidStartTime ? formatDateAndTime(data?.bidStartTime) : "-",
    },
    {
      label: "Duration of OTB",
      value:
        calculateTimeDifference(data?.bidStartTime, data?.bidEndTime) + " Mins",
    },
    {
      label: "Time Remaining",
      value: remaingTime,
      isCounter: true,
    },
  ];

  return isAuction ? auctionValues : otbValues;
};

export const LogValues = ({
  type,
  data,
}: {
  type: LiveTabTypes;
  data: any;
}) => {
  const values = getValues(type, data);
  return (
    <Grid container display={"grid"} gridTemplateColumns={"1fr 1fr"}>
      {values.map(
        (
          item: { label: string; value: string | number; isCounter?: boolean },
          index,
        ) => {
          return (
            <InfoRow
              index={index}
              key={item.label}
              label={item.label}
              value={item.value}
              isCounter={Boolean(item.isCounter)}
            />
          );
        },
      )}
    </Grid>
  );
};
