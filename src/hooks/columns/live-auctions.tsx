import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import CountdownTimer from "@/components/ui/utility/CountdownTimer";
import { LiveAuctionItem } from "@/services/live/auctions/list/types";
import { ChipColorType } from "@/types/color/chipColor";
import { LiveAuctionStatus, LiveTabTypes } from "@/types/live/auctions";
import { numberToINR } from "@/utils/convert-to-rs";
import { formatDateAndTime } from "@/utils/format-date-and-time";
import { handleCarRedirect } from "@/utils/handle-redirection";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface CellType {
  row: LiveAuctionItem;
}

const statusColor = {
  COMPLETED: "success",
  LIVE: "info",
  STOPPED: "error",
  SCHEDULED: "warning",
  OTB: "info",
  OTB_SCHEDULED: "warning",
  OTB_COMPLETED: "success",
  OTB_STOPPED: "error",
};

const otbStatus: any = {
  OTB_SCHEDULED: "SCHEDULED",
  OTB: "OTB LIVE",
  OTB_COMPLETED: "COMPLETED",
  OTB_STOPPED: "STOPPED",
};

const getStatusColor = (status: LiveAuctionStatus) => {
  return statusColor[status] as ChipColorType;
};

const stopStatuses = ["SCHEDULED", "LIVE", "OTB_SCHEDULED", "OTB"];

interface Props {
  handleLog: (item: LiveAuctionItem) => void;
  handleStop: (id: string, eventId: string) => void;
  handleViewers: (item: LiveAuctionItem) => void;
  handleBid?: (item: LiveAuctionItem) => void;
  type?: LiveTabTypes;
}

export const useColumns = (props: Props) => {
  const { handleLog, handleStop, handleViewers, handleBid, type } = props;
  const isAuction = type === "auction";
  const router = useRouter();

  const columns = [
    {
      flex: 0.0105,
      field: "id",
      minWidth: 100,
      headerName: isAuction ? "Auction ID" : "OTB ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { OTBId, auctionId } = row;
        return <Typography>{isAuction ? auctionId : OTBId}</Typography>;
      },
    },
    {
      flex: 0.0105,
      field: "carID",
      minWidth: 50,
      headerName: "Car ID",
      renderCell: ({ row }: CellType) => {
        return (
          <ClickableTypography
            name={String(row.uniqueId)}
            onClick={() => handleCarRedirect(row.carId, router)}
          ></ClickableTypography>
        );
      },
    },
    {
      flex: 0.0155,
      field: "model",
      minWidth: 50,
      headerName: "Car Model",
      renderCell: ({ row }: CellType) => {
        return (
          <ClickableTypography
            name={row?.model}
            onClick={() => handleCarRedirect(row.carId, router)}
          ></ClickableTypography>
        );
      },
    },
    {
      flex: 0.0145,
      field: "highestBid",
      minWidth: 50,
      headerName: isAuction ? "Highest Bid" : "OTB Price",
      renderCell: ({ row }: CellType) => {
        const value = isAuction ? row?.highestBid : row?.realValue;
        return <Typography noWrap>{numberToINR(value ?? 0)}</Typography>;
      },
    },
    {
      flex: 0.0225,
      field: "startTime",
      minWidth: 120,
      headerName: "Start Time",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography>
            {formatDateAndTime(new Date(row?.bidStartTime))}
          </Typography>
        );
      },
    },
    {
      flex: 0.015,
      field: "timeRemaining",
      minWidth: 120,
      headerName: "Time Remaining",
      renderCell: ({ row }: CellType) => {
        return <CountdownTimer isAuction={isAuction} row={row} />;
      },
    },
    ...(isAuction
      ? [
          {
            flex: 0.0125,
            field: "totalBidders",
            minWidth: 50,
            headerName: "Total Bidders",
            renderCell: ({ row }: CellType) => {
              return <Typography noWrap>{row?.totalBidder ?? 0}</Typography>;
            },
          },
        ]
      : []),
    {
      flex: 0.0145,
      field: "status",
      minWidth: 30,
      headerName: "Status",
      renderCell: ({ row }: CellType) => {
        const { status } = row;
        return (
          <Chip
            label={isAuction ? status : otbStatus[status] ?? status}
            variant="outlined"
            color={getStatusColor(status as LiveAuctionStatus) ?? "info"}
          />
        );
      },
    },
    {
      flex: 0.0175,
      field: "action",
      minWidth: 30,
      headerName: "Actions",
      renderCell: ({ row }: CellType) => {
        const { status } = row;
        const isStoppable = stopStatuses.includes(status);
        const scheduledLabel = isAuction ? "SCHEDULED" : "OTB_SCHEDULED";
        const liveLabel = isAuction ? "LIVE" : "OTB_LIVE";
        const showLog = status !== scheduledLabel;
        const showWatch = true;
        const showBid = status === liveLabel && isAuction;
        const eventId = isAuction ? row?.auctionId : row?.OTBId;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {showLog && (
              <ButtonIcon
                onClick={() => handleLog(row)}
                icon="tabler:article"
                title="Log"
              />
            )}
            {isStoppable && (
              <ButtonIcon
                onClick={() => handleStop(row.carId, eventId)}
                icon="tabler:ban"
                title="Stop Auction"
              />
            )}
            {showBid && (
              <ButtonIcon
                onClick={() => handleBid && handleBid(row)}
                icon="tabler:gavel"
                title="Bid"
              />
            )}
            {showWatch && (
              <ButtonIcon
                onClick={() => handleViewers(row)}
                icon="tabler:scan-eye"
                title="Viewers"
              />
            )}
          </Box>
        );
      },
    },
  ];
  return columns;
};
