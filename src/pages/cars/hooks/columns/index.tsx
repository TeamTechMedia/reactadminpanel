import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { BoxHover } from "@/components/ui/containers/BoxHover";
import IconifyIcon from "@/components/ui/icon";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";

type RowType = {
  id: string;
  name: string;
  qc: QCStatusType;
  auction: AuctionStatusType;
  fuel: FuelType;
};

type CellType = {
  row: RowType;
};

type FuelType = "Petrol" | "Diesel" | "Hybrid";

type AuctionStatusType = "Pending" | "Rejected";

type QCStatusType = "Pending" | "Rejected";

const auctionStatus = {
  Pending: "warning",
  Rejected: "error",
  Approved: "success",
};

const qcStatus = {
  Pending: "warning",
  Rejected: "error",
  Approved: "success",
};

function getAuctionColor(auctionStat: AuctionStatusType) {
  return auctionStatus[auctionStat];
}

function getQCColor(qcStat: QCStatusType) {
  return qcStatus[qcStat];
}

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    router.push(`/cars/${id}`);
  }

  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Car ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { id } = row;

        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography noWrap>
              <BoxHover>{id}</BoxHover>
            </Typography>
          </Box>
        );
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Car Name",
      renderCell: ({ row }: CellType) => {
        const { name } = row;

        return (
          <BoxHover sx={{ display: "flex", alignItems: "center" }}>
            <Typography noWrap>{name}</Typography>
          </BoxHover>
        );
      },
    },
    {
      flex: 0.03,
      field: "type",
      minWidth: 50,
      headerName: "Fuel Type",
      renderCell: ({ row }: CellType) => {
        const { fuel } = row;
        return <Typography noWrap>{fuel}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "qc",
      minWidth: 50,
      headerName: "QC Status",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={row.qc}
            variant="outlined"
            color={getQCColor(row.qc) as any}
          />
        );
      },
    },
    {
      flex: 0.026,
      field: "auction",
      minWidth: 50,
      headerName: "Auction Status",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={row.auction}
            variant="outlined"
            color={getAuctionColor(row.auction) as any}
          />
        );
      },
    },
    {
      flex: 0.02,
      field: "action",
      minWidth: 30,
      headerName: "Actions",
      renderCell: ({ row }: any) => {
        const { qc, auction, id } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon
              icon="tabler:eye"
              title="View"
              onClick={() => handleView(id)}
            />
            <Tooltip title="Check QC">
              <IconButton
                size="small"
                sx={{ color: "text.secondary" }}
                disabled={qc === "Approved" || qc === "Not Submitted"}
              >
                <IconifyIcon icon={"tabler:checkup-list"} fontSize={"1.5rem"} />
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
