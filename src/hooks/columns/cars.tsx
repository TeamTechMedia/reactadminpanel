import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import IconifyIcon from "@/components/ui/icon";
import { QCStatusType, getQCColor } from "@/functions/cars/get-qc-color";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";
import { formatDateAndTime } from "@/utils/format-date-and-time";
import { Box, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import useCarActions from "../actions/cars/car-actions";
import { StatusType, getStatusColor } from "@/functions/cars/get-status-color";

type RowType = {
  id: string;
  uniqueId: string;
  model: string;
  qcStatus: QCStatusType;
  auction: AuctionStatusType;
  fuelType: FuelType;
  createdAt: Date;
  status: StatusType;
};

type CellType = {
  row: RowType;
};

type FuelType = "Petrol" | "Diesel" | "Hybrid";

type AuctionStatusType = "Pending" | "Rejected";

interface CarColumnProps {
  handleAuction: (id: string) => void;
}

const statusLabel: any = {
  EVALUATED: "EVALUATED",
  PENDING_EVALUATION: "PENDING",
  LIVE: "LIVE",
  SCHEDULED: "SCHEDULED",
  PROCUREMENT: "PROCUREMENT",
  OTB: "OTB",
};

const useColumns = (props: CarColumnProps) => {
  const { handleAuction } = props;
  const router = useRouter();
  const { approveQC } = useCarActions();

  function handleView(id: string) {
    const newTab = window.open(`/cars/${id}`, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      router.push(`/cars/${id}`);
    }
  }

  const columns = [
    {
      flex: 0.012,
      field: "uniqueId",
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
      field: "createdAt",
      minWidth: 120,
      headerName: "Evaluated On",
      valueGetter: (params: RowType) => {
        const { createdAt } = params;
        return formatDateAndTime(createdAt);
      },
      renderCell: ({ row }: CellType) => {
        const { createdAt } = row;

        return <Typography noWrap>{formatDateAndTime(createdAt)}</Typography>;
      },
    },
    {
      flex: 0.03,
      field: "model",
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
      field: "fuelType",
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
      field: "qcStatus",
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
    {
      flex: 0.026,
      field: "status",
      minWidth: 50,
      headerName: "Status",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={(statusLabel[row.status] as StatusType) ?? row.status}
            variant="outlined"
            color={
              getStatusColor(row.status) as "error" | "success" | "warning"
            }
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
        const { qcStatus, status, id } = row;
        const isQcChecked = qcStatus === "VERIFIED";
        const isAuction = status === "SCHEDULED" || status === "LIVE";
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
                disabled={isQcChecked}
                onClick={() => approveQC(id)}
              >
                <IconifyIcon icon={"tabler:checkup-list"} fontSize={"1.5rem"} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Approve Auction">
              <IconButton
                size="small"
                sx={{ color: "text.secondary" }}
                disabled={isAuction}
                onClick={() => handleAuction(id)}
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
