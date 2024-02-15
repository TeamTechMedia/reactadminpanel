import { AmountTypography } from "@/components/ui/containers/AmountTypography";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import IconifyIcon from "@/components/ui/icon";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";

type RowType = {
  id: string;
  name: string;
  qc: QCStatusType;
  auction: AuctionStatusType;
  duration: string;
  time_remaining: string;
  win_or_lead: string;
  total_bidder: number;
  highest_price: string;
  status: AuctionStatusType;
};

type CellType = {
  row: RowType;
};

type AuctionStatusType = "Live" | "Completed" | "Scheduled";

type QCStatusType = "Pending" | "Rejected";

const auctionStatus = {
  Scheduled: "warning",
  Completed: "info",
  Live: "success",
};

function getAuctionStat(auctionStat: AuctionStatusType) {
  return auctionStatus[auctionStat];
}

const useColumns = () => {
  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Car ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { id } = row;

        return <ClickableTypography name={id} />;
      },
    },
    {
      flex: 0.05,
      field: "name",
      minWidth: 120,
      headerName: "Car Name",
      renderCell: ({ row }: CellType) => {
        const { name } = row;

        return <ClickableTypography name={name} />;
      },
    },
    {
      flex: 0.02,
      field: "duration",
      minWidth: 50,
      headerName: "Duration",
      renderCell: ({ row }: CellType) => {
        const { duration } = row;
        return <Typography noWrap>{duration}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "time_remaining",
      minWidth: 50,
      headerName: "Time Remaining",
      renderCell: ({ row }: CellType) => {
        const { time_remaining } = row;
        return <Typography noWrap>{time_remaining}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "win_and_lead",
      minWidth: 50,
      headerName: "Win/Lead",
      renderCell: ({ row }: CellType) => {
        const { win_or_lead } = row;
        return <ClickableTypography name={win_or_lead} />;
      },
    },
    {
      flex: 0.02,
      field: "total_bidders",
      minWidth: 50,
      headerName: "Total Bidders",
      renderCell: ({ row }: CellType) => {
        return <Typography noWrap>{row.total_bidder}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "highest_price",
      minWidth: 50,
      headerName: "Highest Price",
      renderCell: ({ row }: CellType) => {
        return <AmountTypography text={row.highest_price} />;
      },
    },
    {
      flex: 0.026,
      field: "auction_status",
      minWidth: 50,
      headerName: "Auction Status",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={row.status}
            variant="outlined"
            color={getAuctionStat(row.status) as any}
          />
        );
      },
    },
    {
      flex: 0.03,
      field: "action",
      minWidth: 30,
      headerName: "Actions",
      renderCell: ({ row }: any) => {
        const { qc, auction } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Stop Auction">
              <IconButton size="small" sx={{ color: "text.secondary" }}>
                <IconifyIcon
                  icon={"tabler:circle-rectangle"}
                  fontSize={"1.5rem"}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="One Touch Buy">
              <IconButton
                size="small"
                sx={{ color: "text.secondary" }}
                disabled={qc === "Approved" || qc === "Not Submitted"}
              >
                <IconifyIcon icon={"tabler:hand-click"} fontSize={"1.5rem"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Approve Auction">
              <IconButton
                size="small"
                sx={{ color: "text.secondary" }}
                disabled={auction === "Approved"}
              >
                <IconifyIcon
                  icon={"tabler:discount-check"}
                  fontSize={"1.5rem"}
                />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
