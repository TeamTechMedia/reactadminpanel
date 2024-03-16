import { CarData, CarDataSearchParams } from "@/services/cars/list/types";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { SetStateAction, useDeferredValue, useEffect } from "react";

interface PostSearchCars {
  search: string;
  setCarPostData: React.Dispatch<SetStateAction<CarData[]>>;
  postSearch: UseMutationResult<
    AxiosResponse<any, any>,
    Error,
    CarDataSearchParams,
    unknown
  >;
}

const usePostSearchCars = (props: PostSearchCars) => {
  const { search, setCarPostData, postSearch } = props;
  const deferredSearch = useDeferredValue<string>(search);

  useEffect(() => {
    if (deferredSearch !== undefined && search) {
      postSearch.mutate(
        {
          lastFourDigits: deferredSearch,
        },
        {
          onSuccess: (res: { data: { data: CarData[] } }) => {
            setCarPostData(res.data.data);
          },
        },
      );
    }
  }, [deferredSearch]);
};

export default usePostSearchCars;
