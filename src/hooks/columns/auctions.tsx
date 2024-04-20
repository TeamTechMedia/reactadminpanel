import { AmountTypography } from "@/components/ui/containers/AmountTypography";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import handleRedirectCars from "@/utils/handle-redirect-car";
import { Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

type RowType = {
  id: string;
  model: string;
  qc: QCStatusType;
  auction: AuctionStatusType;
  duration: string;
  time_remaining: string;
  win_or_lead: string;
  total_bidder: number;
  highest_price: string;
  status: AuctionStatusType;
  realValue: number;
  uniqueId: string;
};

type CellType = {
  row: RowType;
};

type AuctionStatusType = "LIVE";

type QCStatusType = "Pending" | "Rejected";

const auctionStatus = {
  LIVE: "success",
};

function getAuctionStat(auctionStat: AuctionStatusType) {
  return auctionStatus[auctionStat];
}

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    handleRedirectCars({
      id,
      link: "cars",
      router,
    });
  }
  const columns = [
    {
      flex: 0.012,
      field: "uniqueID",
      minWidth: 110,
      headerName: "Unique ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { uniqueId } = row;
        return <ClickableTypography name={uniqueId} />;
      },
    },
    {
      flex: 0.05,
      field: "name",
      minWidth: 120,
      headerName: "Car Name",
      renderCell: ({ row }: CellType) => {
        const { model, id } = row;

        return (
          <ClickableTypography name={model} onClick={() => handleView(id)} />
        );
      },
    },
    {
      flex: 0.02,
      field: "duration",
      minWidth: 50,
      headerName: "Duration",
      renderCell: ({ row }: CellType) => {
        const { duration } = row;
        return <Typography noWrap>{duration || "00:00"}</Typography>;
      },
    },
    {
      flex: 0.02,
      field: "realValue",
      minWidth: 50,
      headerName: "Real Value",
      renderCell: ({ row }: CellType) => {
        const { realValue } = row;
        return <AmountTypography text={String(realValue || "0")} />;
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
  ];

  return columns;
};

export default useColumns;
