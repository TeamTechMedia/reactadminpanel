import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { formatToAmount } from "@/utils/convert-to-rs";
import handleRedirectCars from "@/utils/handle-redirect-car";
import { Chip, Typography } from "@mui/material";
import { useRouter } from "next/router";

type RowType = {
  id: string;
  uniqueId: string;
  customerId: string;
  name: string;
  customer: string;
  phone: number;
  otb: number;
  status: StatusType;
  model: string;
};

type CellType = {
  row: RowType;
};

type StatusType = "OTB";

const status = {
  OTB: "success",
};

function getStatus(value: StatusType) {
  return status[value];
}

const useColumns = () => {
  const router = useRouter();
  function handleView(id: string) {
    handleRedirectCars({
      id,
      link: "cars",
      router,
    });
  }
  const columns = [
    {
      flex: 0.012,
      field: "id",
      minWidth: 110,
      headerName: "Car ID",
      renderCell: ({ row }: CellType) => {
        const { uniqueId, id } = row;
        console.log(row, "rowcheck");
        return (
          <ClickableTypography name={uniqueId} onClick={() => handleView(id)} />
        );
      },
    },
    {
      flex: 0.05,
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
  ];

  return columns;
};

export default useColumns;
