import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type StatusType = "Active" | "Blocked";

interface RowType {
  status: StatusType;
  location: string;
  userId: string;
  fullname: string;
  contactNo: string;
  id: string;
  isBlocked: boolean;
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

interface ColProps {
  handleAction: (isBlock: boolean, id: string) => void;
}

const useColumns = (props: ColProps) => {
  const { handleAction } = props;
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
        const { userId, id } = row;

        return (
          <ClickableTypography name={userId} onClick={() => handleView(id)} />
        );
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Evaluator Name",
      renderCell: ({ row }: CellType) => {
        const { fullname, id } = row;

        return (
          <ClickableTypography name={fullname} onClick={() => handleView(id)} />
        );
      },
    },
    {
      flex: 0.03,
      field: "contactNo",
      minWidth: 50,
      headerName: "Phone No.",
      renderCell: ({ row }: CellType) => {
        const { contactNo } = row;
        return <Typography noWrap>{contactNo}</Typography>;
      },
    },
    {
      flex: 0.022,
      field: "location",
      minWidth: 50,
      headerName: "Location",
      renderCell: ({ row }: CellType) => {
        const { location } = row;
        return (
          <Typography noWrap>{capitaliseFirstLetter(location)}</Typography>
        );
      },
    },
    {
      flex: 0.025,
      field: "status",
      minWidth: 50,
      headerName: "Status",
      renderCell: ({ row }: CellType) => {
        const status = !row.isBlocked ? "Active" : "Blocked";
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
        const { id, isBlocked } = row;
        const block = isBlocked;
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
              onClick={() => handleAction(block, id)}
            />
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
