import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type StatusType = "Active" | "Blocked";

interface RowType {
  status: StatusType;
  location: string;
  id: string;
  name: string;
  phone: string;
}

type CellType = {
  row: RowType;
};

const statusColor = {
  Active: "success",
  Blocked: "error",
};

function getStatusColor(status: StatusType) {
  return statusColor[status] as "success" | "error";
}

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    router.push(`/evaluators/${id}`);
  }
  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Evaluator ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: CellType) => {
        const { id } = row;

        return <ClickableTypography name={id} />;
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Evaluator Name",
      renderCell: ({ row }: CellType) => {
        const { name } = row;

        return <ClickableTypography name={name} />;
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
      field: "location",
      minWidth: 50,
      headerName: "Location",
      renderCell: ({ row }: CellType) => {
        const { location } = row;
        return <Typography noWrap>{location}</Typography>;
      },
    },
    {
      flex: 0.025,
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
        const { status, id } = row;
        const block = status === "Blocked";
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon
              onClick={() => handleView(id)}
              icon="tabler:eye"
              title="View"
            />
            <ButtonIcon
              icon={block ? "tabler:check" : "tabler:x"}
              title={block ? "Approve" : "Block"}
              color={block ? "lime" : "red"}
            />
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
