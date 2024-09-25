import { useGetDealers } from "@/services/dealers/list/get";
import { DealerDataObj } from "@/services/dealers/list/types";
import { DealerMetrics } from "@/views/customers/cards/DealerMetrics";
import { DealersData } from "@/views/customers/tabContents/new/DealersData";
import { Grid } from "@mui/material";
import { AxiosResponse } from "axios";
import { createContext, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

export type DealerContextType = {
  params: { page: number; pageSize: number };
  setParams: React.Dispatch<SetStateAction<{ page: number; pageSize: number }>>;
  data?: AxiosResponse<DealerDataObj>;
  isLoading: boolean;
} | null;

export const DealerContext = createContext<DealerContextType>(null);

export default function Dealers() {
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });

  const { control, watch, setValue } = useForm();
  const [searchBy, search] = watch(["searchBy", "search"]);
  const { data, isLoading } = useGetDealers({
    params: {
      ...params,
      ...(search && { [searchBy]: search }),
      page: params.page + 1,
      limit: params.pageSize,
    },
  });
  const dealerContext =
    { params, setParams, data, isLoading, control, watch, setValue } || null;

  return (
    <DealerContext.Provider value={dealerContext}>
      <Grid>
        <DealerMetrics />
        <DealersData />
      </Grid>
    </DealerContext.Provider>
  );
}

Dealers.authGuard = true;
Dealers.guestGuard = false;
