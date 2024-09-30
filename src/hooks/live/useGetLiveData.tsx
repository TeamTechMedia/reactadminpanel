import { useGetLiveAuctions } from "@/services/live/auctions/list/get";
import { useGetLiveOtb } from "@/services/live/otb/list/get";
import { AuctionLiveFilterParams } from "@/types/live/auctions";
import { useEffect, useState } from "react";
import io from "socket.io-client";

interface LiveCar {
  _id: string;
  front: { url: string };
  created_at: string;
}

interface Props {
  tab: string;
  params: { page: number; pageSize: number };
  filterParams: AuctionLiveFilterParams;
}

export const auctionStatuses = ["LIVE", "SCHEDULED", "COMPLETED", "STOPPED"];
export const otbStatuses = [
  "OTB",
  "OTB_SCHEDULED",
  "OTB_STOPPED",
  "OTB_COMPLETED",
];

export const useGetLiveData = (props: Props) => {
  const { tab, params, filterParams } = props;
  const { searchText, status } = filterParams;
  const [live, setLive] = useState<any>([]);

  const isAuction = tab === "auction";
  const isOtb = tab === "otb";

  const {
    data: auctionData,
    isLoading: isAuctionLoading,
    isFetching: isAuctionFetching,
    isFetched: isAuctionFetched,
  } = useGetLiveAuctions({
    ...params,
    enabled: isAuction,
    status: status ?? "LIVE,SCHEDULED,COMPLETED,STOPPED",
    uniqueId: searchText,
  });

  const {
    data: otbData,
    isFetching: isOtbFetching,
    isFetched: isOtbFetched,
    isLoading: isOtbLoading,
  } = useGetLiveOtb({
    ...params,
    enabled: isOtb,
    status: status ?? "OTB,OTB_SCHEDULED,OTB_STOPPED,OTB_COMPLETED",
    uniqueId: searchText,
  });

  const { data, isFetching, isFetched, isLoading } = isAuction
    ? {
        data: auctionData,
        isFetching: isAuctionFetching,
        isFetched: isAuctionFetched,
        isLoading: isAuctionLoading,
      }
    : {
        data: otbData,
        isFetching: isOtbFetching,
        isFetched: isOtbFetched,
        isLoading: isOtbLoading,
      };

  const socketKey = "getLiveResult";

  useEffect(() => {
    socketInitializer();
  }, []);

  useEffect(() => {
    if (isFetched) {
      setLive(data?.data);
    }
  }, [isFetching]);

  // Socket Implementation
  let socket;
  async function socketInitializer() {
    socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL ?? "", {
      transports: ["websocket"],
    });

    socket.on(socketKey, (socketData: string) => {
      try {
        const parsedData = JSON.parse(socketData);
        const updatedDataObj = parsedData?.[0];
        console.log(updatedDataObj, "updatedCar");
        if (updatedDataObj) {
          // Check status validity based on the current tab
          const isValidStatus = isAuction
            ? auctionStatuses.includes(updatedDataObj.status)
            : otbStatuses.includes(updatedDataObj.status);

          if (isValidStatus) {
            if (status && updatedDataObj.status !== status) {
              return;
            }

            if (searchText && updatedDataObj.carID !== searchText) {
              return;
            }

            setLive((liveData: LiveCar[]) => {
              const existingCar = liveData.find(
                (liveCar) => liveCar._id === updatedDataObj._id,
              );

              if (existingCar) {
                // If the car exists, update its data
                return liveData.map((liveCar) => {
                  if (liveCar._id === updatedDataObj._id) {
                    return { front: liveCar.front, ...updatedDataObj };
                  }
                  return liveCar;
                });
              } else {
                // If the car doesn't exist, check the `created_at` condition
                const firstCar = liveData[0];

                if (
                  new Date(updatedDataObj.created_at) >
                  new Date(firstCar?.created_at)
                ) {
                  // If the new item is more recent than the first item
                  return [
                    updatedDataObj,
                    ...liveData.slice(0, liveData.length - 1),
                  ];
                } else {
                  // Otherwise, keep the array unchanged
                  return liveData;
                }
              }
            });
          }
        }
      } catch (e) {
        console.error("Invalid JSON string", e);
      }
    });
  }

  return {
    data: { data: live, count: data?.count },
    isLoading,
  };
};
