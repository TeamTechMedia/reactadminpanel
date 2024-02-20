import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type StatusType = "Blocked" | "Not Verified" | "Verified";

export type DocStatus = "Not Submitted" | "Submitted";

interface RowType {
  status: StatusType;
  documents: DocStatus;
  location: string;
  id: string;
  name: string;
  phone: string;
}

type CellType = {
  row: RowType;
};

const statusColor = {
  Verified: "success",
  "Not Verified": "warning",
  Blocked: "error",
};

const docColor = {
  Submitted: "success",
  "Not Submitted": "warning",
};

function getStatusColor(status: StatusType) {
  return statusColor[status] as any;
}

function getDocumentColor(documentStatus: DocStatus) {
  return docColor[documentStatus];
}

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    router.push(`/customers/${id}`);
  }
  const columns: any = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Customer ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: any) => {
        const { id } = row;

        return <ClickableTypography name={id} />;
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Customer Name",
      renderCell: ({ row }: any) => {
        const { name } = row;

        return <ClickableTypography name={name} />;
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone No.",
      renderCell: ({ row }: any) => {
        const { phone } = row;
        return <Typography noWrap>{phone}</Typography>;
      },
    },
    {
      flex: 0.022,
      field: "location",
      minWidth: 50,
      headerName: "Location",
      renderCell: ({ row }: any) => {
        const { location } = row;
        return <Typography noWrap>{location}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "documents",
      minWidth: 50,
      headerName: "Documents",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={row.documents}
            variant="outlined"
            color={getDocumentColor(row.documents) as any}
          />
        );
      },
    },
    {
      flex: 0.025,
      field: "status",
      minWidth: 50,
      headerName: "Status",
      renderCell: ({ row }: any) => {
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
      renderCell: ({ row }: any) => {
        const { status, documents, id } = row;
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonIcon
              icon="tabler:eye"
              title="View"
              onClick={() => handleView(id)}
            />
            <ButtonIcon
              icon="tabler:discount-check"
              title="Verify"
              disabled={status === "Verified" || documents === "Not Submitted"}
            />
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
