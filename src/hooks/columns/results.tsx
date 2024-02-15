import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { formatToAmount } from "@/utils/convert-to-rs";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type StatusType = "Contacted" | "Not Contacted";

interface RowType {
  status: StatusType;
  highest_price: string;
  id: string;
  customerId: string;
  carName: string;
  customerName: string;
  name: string;
  phone: string;
}

type CellType = {
  row: RowType;
};

const statusColor = {
  Contacted: "success",
  "Not Contacted": "warning",
  Blocked: "error",
};

function getStatusColor(status: StatusType) {
  return statusColor[status as StatusType] as "success" | "warning" | "error";
}

const useColumns = () => {
  const router = useRouter();

  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Car ID",
      renderCell: ({ row }: CellType) => {
        const { id } = row;

        return <ClickableTypography name={id} />;
      },
    },
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Customer ID",
      renderCell: ({ row }: CellType) => {
        const { customerId } = row;

        return <ClickableTypography name={customerId} />;
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Car Name",
      renderCell: ({ row }: CellType) => {
        const { carName } = row;

        return <ClickableTypography name={carName} />;
      },
    },
    {
      flex: 0.03,
      field: "customer_name",
      minWidth: 120,
      headerName: "Customer Name",
      renderCell: ({ row }: CellType) => {
        const { customerName } = row;

        return <ClickableTypography name={customerName} />;
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone No.",
      renderCell: ({ row }: CellType) => {
        const { phone } = row;
        return <Typography noWrap>{phone}</Typography>;
      },
    },
    {
      flex: 0.022,
      field: "highest_price",
      minWidth: 50,
      headerName: "Highest Price",
      renderCell: ({ row }: CellType) => {
        const { highest_price } = row;
        return <Typography noWrap>{formatToAmount(highest_price)}</Typography>;
      },
    },
    {
      flex: 0.02,
      field: "status",
      minWidth: 50,
      headerName: "Status",
      renderCell: ({ row }: CellType) => {
        const { status } = row;
        return (
          <Chip
            label={status}
            variant="outlined"
            color={getStatusColor(status)}
          />
        );
      },
    },
    {
      flex: 0.02,
      field: "action",
      minWidth: 30,
      headerName: "Actions",
      renderCell: ({ row }: CellType) => {
        const { id } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon
              onClick={() => router.push(`/results/${id}`)}
              icon="tabler:eye"
              title="View"
            />
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
