import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import IconifyIcon from "@/components/ui/icon";
import { QCStatusType, getQCColor } from "@/functions/cars/get-qc-color";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";
import { formatDate } from "@/utils/format-date";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";

type RowType = {
  id: string;
  uniqueId: string;
  model: string;
  qcStatus: QCStatusType;
  auction: AuctionStatusType;
  fuelType: FuelType;
  createdAt: Date;
};

type CellType = {
  row: RowType;
};

type FuelType = "Petrol" | "Diesel" | "Hybrid";

type AuctionStatusType = "Pending" | "Rejected";

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    router.push(`/cars/${id}`);
  }

  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 120,
      headerName: "Unique ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { uniqueId, id } = row;
        return (
          <ClickableTypography name={uniqueId} onClick={() => handleView(id)} />
        );
      },
    },
    {
      flex: 0.03,
      field: "date",
      minWidth: 120,
      headerName: "Date",
      renderCell: ({ row }: CellType) => {
        const { createdAt } = row;

        return <Typography noWrap>{formatDate(createdAt)}</Typography>;
      },
    },
    {
      flex: 0.03,
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
      flex: 0.03,
      field: "type",
      minWidth: 50,
      headerName: "Fuel Type",
      renderCell: ({ row }: CellType) => {
        const { fuelType } = row;
        return (
          <Typography noWrap>{capitaliseFirstLetter(fuelType)}</Typography>
        );
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
            label={row.qcStatus}
            variant="outlined"
            color={getQCColor(row.qcStatus) as "error" | "success" | "warning"}
          />
        );
      },
    },
    // {
    //   flex: 0.026,
    //   field: "auction",
    //   minWidth: 50,
    //   headerName: "Auction Status",
    //   renderCell: ({ row }: CellType) => {
    //     return (
    //       <Chip
    //         label={row.auction}
    //         variant="outlined"
    //         color={getAuctionColor(row.auction) as any}
    //       />
    //     );
    //   },
    // },
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
