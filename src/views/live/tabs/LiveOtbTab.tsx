import { useColumns } from "@/hooks/columns/live-auctions";
import React, { useEffect, useState } from "react";
import LiveFeed from "./LiveFeed";
import { AuctionLiveFilterParams } from "@/types/live/auctions";
import { useGetLiveData } from "@/hooks/live/useGetLiveData";
import { addKey } from "@/utils/add-key";
import useCustomToast from "@/utils/toast";
import { useStopCar } from "@/services/live/auctions/stop/patch";
import { errorMessageParser } from "@/utils/error";

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
  const [eventId, setEventId] = useState<string>("");
  const [log, setLog] = useState<any>();
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });
  const stop = useStopCar();
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

  const handleStop = (id: string, eventID: string) => {
    handleStopModal();
    setStopId(id);
    setEventId(eventID);
  };

  const handleStopProceed = () => {
    stop.mutate(
      {
        id: stopId,
        body: {
          status: "OTB_STOPPED",
          auctionOrOTBId: eventId,
        },
      },
      {
        onSuccess: () => {
          toast.success("Otb Stopped Successfully");
          handleStopModal();
        },
        onError: (err) => toast.error(errorMessageParser(err)),
      },
    );
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
  const hasSearch = searchText && searchText !== "";
  const hasFilters = hasSearch || status;

  const liveOtbsWithId = addKey(liveOtbs, "id", "_id") ?? [];

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
        data={liveOtbsWithId as any}
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
        disableStopProceed={stop.isPending}
        rowCount={data?.count ?? 100000}
        isFetching={isLoading}
      />
    </div>
  );
}

export default LiveOtbTab;
