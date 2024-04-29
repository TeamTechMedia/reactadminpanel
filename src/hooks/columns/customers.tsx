import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { Chip, Typography } from "@mui/material";

export type StatusType = "Deactivated" | "Active";

export type DocStatus = "NOTSUBMITTED" | "SUBMITTED";

interface RowType {
  status: StatusType;
  isDocumentsVerified: DocStatus;
  location: string;
  id: string;
  name: string;
  phone: string;
}

type CellType = {
  row: RowType;
};

const statusColor = {
  Deactivated: "error",
  Active: "success",
};

const docColor = {
  SUBMITTED: "success",
  NOTSUBMITTED: "warning",
};

function getStatusColor(status: StatusType) {
  return statusColor[status] as any;
}

function getDocumentColor(documentStatus: DocStatus) {
  return docColor[documentStatus];
}

const useColumns = () => {
  const columns: any = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Dealer ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: any) => {
        const { userId } = row;
        console.log(row, "dealerData");
        return <ClickableTypography name={userId} />;
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Customer Name",
      renderCell: ({ row }: any) => {
        const { fullname } = row;

        return <ClickableTypography name={fullname} />;
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone No.",
      renderCell: ({ row }: any) => {
        const { contactNo } = row;
        return <Typography noWrap>{contactNo}</Typography>;
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
            label={row.isDocumentsVerified ?? "-"}
            variant="outlined"
            color={getDocumentColor(row.isDocumentsVerified) as any}
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
        const { isDeactivate } = row;
        const status = isDeactivate ? "Deactivated" : "Active";
        return (
          <Chip
            label={status}
            variant="outlined"
            color={getStatusColor(status)}
          />
        );
      },
    },
    // {
    //   flex: 0.02,
    //   field: "action",
    //   minWidth: 30,
    //   headerName: "Actions",
    //   renderCell: ({ row }: any) => {
    //     const { status, documents, id } = row;
    //     return (
    //       <Box sx={{ display: "flex", alignItems: "center" }}>
    //         <ButtonIcon
    //           icon="tabler:eye"
    //           title="View"
    //           onClick={() => handleView(id)}
    //         />
    //         <ButtonIcon
    //           icon="tabler:discount-check"
    //           title="Verify"
    //           disabled={status === "Verified" || documents === "Not Submitted"}
    //         />
    //       </Box>
    //     );
    //   },
    // },
  ];

  return columns;
};

export default useColumns;
