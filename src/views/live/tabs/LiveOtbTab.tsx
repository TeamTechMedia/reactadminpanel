import { useColumns } from "@/hooks/columns/live-auctions";
import React, { useEffect, useState } from "react";
import LiveFeed from "./LiveFeed";
import { AuctionLiveFilterParams } from "@/types/live/auctions";
import { useGetLiveData } from "@/hooks/live/useGetLiveData";
import { addKey } from "@/utils/add-key";
import { getSlicedData } from "@/functions/live/auction/get-sliced-data";
import useUpdateCarById from "@/hooks/actions/cars/update-car";
import useCustomToast from "@/utils/toast";

interface Props {
  filterParams: AuctionLiveFilterParams;
}

function LiveOtbTab(props: Props) {
  const { filterParams } = props;
  const { searchText, status } = filterParams;
  const [openLog, setOpenLog] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [openViews, setOpenViews] = useState(false);
  const [stopId, setStopId] = useState<string>("");
  const [log, setLog] = useState<any>();
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });
  const { updateCar: update, isPending } = useUpdateCarById();
  const toast = useCustomToast();
  const handleLogModal = () => {
    setOpenLog(!openLog);
  };

  const handleViewersModal = () => {
    setOpenViews(!openViews);
  };

  const handleLog = (logItem: any) => {
    setLog(logItem);
    handleLogModal();
  };

  const handleStopModal = () => {
    setOpenStop(!openStop);
  };

  const handleStop = (id: string) => {
    handleStopModal();
    setStopId(id);
  };

  const handleStopProceed = () => {
    update({
      body: {
        status: "STOPPED",
      },
      id: stopId,
      handleSuccess: () => {
        handleStop("");
        toast.success("Otb Stopped Successfully!!");
      },
    });
  };

  const handleViewers = (item: any) => {
    setLog(item);
    setOpenViews(!openViews);
  };

  const columns = useColumns({
    handleLog,
    handleStop,
    handleViewers,
    type: "otb",
  });

  const { data, isLoading } = useGetLiveData({
    params,
    tab: "otb",
    filterParams,
  });
  const liveOtbs = data?.data;
  const page = params.page + 1;
  const pageSize = params.pageSize;
  const hasSearch = searchText && searchText !== "";
  const hasFilters = hasSearch || status;
  const slicedData = getSlicedData({
    liveAuctions: liveOtbs,
    page,
    pageSize,
    filterParams,
  });
  const slicedDataWithId = addKey(slicedData, "id", "_id") ?? [];

  useEffect(() => {
    if (hasFilters) {
      setParams({
        page: 0,
        pageSize: 10,
      });
    }
  }, [hasFilters]);

  return (
    <div>
      <LiveFeed
        columns={columns}
        data={slicedDataWithId as any}
        type="otb"
        handleClose={handleLogModal}
        openLog={openLog}
        log={log}
        handleStop={handleStopModal}
        openStop={openStop}
        handleStopProceed={handleStopProceed}
        openViews={openViews}
        handleViewers={handleViewersModal}
        params={params}
        setParams={setParams}
        disableStopProceed={isPending}
        rowCount={data?.count ?? 100000}
        isFetching={isLoading}
      />
    </div>
  );
}

export default LiveOtbTab;
