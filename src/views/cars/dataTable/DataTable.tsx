import { Card, CardHeader, Grid } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useColumns from "../../../hooks/columns/cars";
import { useGetCars } from "@/services/cars/list/get";
import { filterObjects } from "@/utils/filter-objects";
import { addKey } from "@/utils/add-key";
import { Control } from "react-hook-form";
import { CarData } from "@/services/cars/list/types";
import usePostSearchCars from "@/hooks/actions/cars/post-search";
import { useSearchCars } from "@/services/cars/list/post";
import AuctionDialogue from "../dailogue/AuctionDialogue";
import { CarAuctionOtbHandleTypes } from "@/types/cars/car";

interface CarDataTableProps {
  control: Control<{ searchBy: string; search: string }>;
  postQueryParams: {
    search: string;
    createdAt?: Date | null;
    searchBy?: string;
    status: string;
  };
}

const DataTable = (carDataTableProps: CarDataTableProps) => {
  const { postQueryParams } = carDataTableProps;
  const { search, createdAt, searchBy, status } = postQueryParams;
  const isPost =
    (searchBy === "regNum" && search !== "") ||
    (createdAt !== null && createdAt);
  const columns = useColumns({
    handleAuctionOtb,
  });
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });
  const [carPostData, setCarPostData] = useState<CarData[]>([]);
  const { data: carsData, isLoading } = useGetCars({
    params: { ...params, status, search, searchBy },
  });
  const [count, setCount] = useState<number>(0);
  const carWithoutId = carsData?.data?.data;
  const filteredCars = filterObjects(carWithoutId);
  const cars = addKey(filteredCars, "id", "_id");
  const carsPostData = addKey(carPostData, "id", "_id");

  const postSearch = useSearchCars();
  usePostSearchCars({
    search,
    createdAt,
    searchBy,
    setCarPostData,
    postSearch,
    setCount,
  });

  const [openApprove, setOpenApprove] = useState(false);
  const [id, setId] = useState("");
  const [modal, setModal] = useState<CarAuctionOtbHandleTypes>("auction");

  function handleAuctionOtb(carId: string, type: CarAuctionOtbHandleTypes) {
    setId(carId);
    setOpenApprove(!openApprove);
    setModal(type);
  }

  return (
    <Card>
      <CardHeader
        sx={{ p: 2 }}
        titleTypographyProps={{ variant: "h6" }}
        title={"Cars"}
      ></CardHeader>
      <Grid padding={2}>
        <DataGrid
          autoHeight
          pagination
          columnHeaderHeight={55}
          disableRowSelectionOnClick
          disableColumnSelector
          columns={(columns as any) ?? []}
          loading={isLoading || postSearch.isPending}
          rows={isPost ? carsPostData : (cars as any) ?? []}
          rowCount={isPost ? count : carsData?.data.count ?? 0}
          paginationMode="server"
          paginationModel={params}
          onPaginationModelChange={setParams}
        />
      </Grid>
      <AuctionDialogue
        open={openApprove}
        setOpen={setOpenApprove}
        id={id}
        isList
        modal={modal}
      />
    </Card>
  );
};

export default DataTable;
