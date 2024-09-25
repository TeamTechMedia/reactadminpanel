import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { handleRedirection } from "@/utils/handle-redirection";
import { Box, Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

export type StatusType = "Deactivated" | "Active";

export type DocStatus = "NOTSUBMITTED" | "SUBMITTED";

interface RowType {
  userId: string;
  _id: string;
  id: string;
  fullname: string;
  district: string;
  isDocumentsVerified: DocStatus;
  contactNo: string;
  isDeposited: boolean;
}

type CellType = {
  row: RowType;
};

const docColor = {
  SUBMITTED: "success",
  NOTSUBMITTED: "warning",
  VERIFIED: "success",
};

function getDocumentColor(documentStatus: DocStatus) {
  return docColor[documentStatus];
}

export const disableStatus = ["VERIFIED", "NOTSUBMITTED"];

const useColumns = () => {
  const router = useRouter();
  const columns: any = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Dealer ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: { row: RowType }) => {
        const { userId, id } = row;
        return (
          <ClickableTypography
            onClick={() => {
              handleRedirection("dealers", id, router);
            }}
            name={userId}
          />
        );
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Dealership Name",
      renderCell: ({ row }: { row: RowType }) => {
        const { fullname, id } = row;

        return (
          <ClickableTypography
            onClick={() => {
              handleRedirection("dealers", id, router);
            }}
            name={fullname}
          />
        );
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone No.",
      renderCell: ({ row }: { row: RowType }) => {
        const { contactNo } = row;
        return <Typography noWrap>{contactNo}</Typography>;
      },
    },
    {
      flex: 0.022,
      field: "location",
      minWidth: 50,
      headerName: "Location",
      renderCell: ({ row }: { row: RowType }) => {
        const { district } = row;
        return <Typography noWrap>{district}</Typography>;
      },
    },
    {
      flex: 0.026,
      field: "documents",
      minWidth: 50,
      headerName: "Document Status",
      renderCell: ({ row }: CellType) => {
        console.log(row, "rowCheck");
        return (
          <Chip
            label={row.isDocumentsVerified ?? "-"}
            variant="outlined"
            color={getDocumentColor(row.isDocumentsVerified) as any}
          />
        );
      },
    },
    {
      flex: 0.026,
      field: "deposit",
      minWidth: 50,
      headerName: "Security Deposit ",
      renderCell: ({ row }: { row: RowType }) => {
        return (
          <Chip
            label={row.isDocumentsVerified ?? "-"}
            variant="outlined"
            color={getDocumentColor(row.isDocumentsVerified) as any}
          />
        );
      },
    },
    {
      flex: 0.026,
      field: "account_status",
      minWidth: 50,
      headerName: "Account Status",
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            label={row.isDocumentsVerified ?? "-"}
            variant="outlined"
            color={getDocumentColor(row.isDocumentsVerified) as any}
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
              icon="tabler:eye"
              title="View"
              onClick={() => router.push(`/dealers/${id}`)}
            />
          </Box>
        );
      },
    },
  ];

  return columns;
};

export default useColumns;
