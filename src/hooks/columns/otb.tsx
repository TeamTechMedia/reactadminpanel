import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { formatToAmount } from "@/utils/convert-to-rs";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

type RowType = {
  id: string;
  customerId: string;
  name: string;
  customer: string;
  phone: number;
  otb: number;
  status: StatusType;
};

type CellType = {
  row: RowType;
};

type StatusType = "Not Contacted" | "Contacted";

const status = {
  "Not Contacted": "warning",
  Contacted: "success",
};

function getStatus(value: StatusType) {
  return status[value];
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
      field: "customerId",
      minWidth: 110,
      headerName: "Customer ID",
      renderCell: ({ row }: CellType) => {
        const { customerId } = row;

        return <ClickableTypography name={customerId} />;
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
      flex: 0.03,
      field: "customerName",
      minWidth: 120,
      headerName: "Customer Name",
      renderCell: ({ row }: CellType) => {
        const { customer } = row;

        return <ClickableTypography name={customer} />;
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone",
      renderCell: ({ row }: CellType) => {
        const { phone } = row;
        return <Typography noWrap>{phone}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "otb",
      minWidth: 50,
      headerName: "OTB Price",
      renderCell: ({ row }: CellType) => {
        const { otb } = row;
        return <Typography noWrap>{formatToAmount(otb)}</Typography>;
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
            label={row.status}
            variant="outlined"
            color={getStatus(row.status) as any}
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
        const { id } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon
              onClick={() => router.push(`/otb/${id}`)}
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
