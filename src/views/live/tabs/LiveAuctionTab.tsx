import { useColumns } from "@/hooks/columns/live-auctions";
import React, { useEffect, useState } from "react";
import LiveFeed from "./LiveFeed";
import AuctionBidModal from "../modals/AuctionBidModal";
import { LiveAuctionItem } from "@/services/live/auctions/list/types";
import { useGetLiveData } from "@/hooks/live/useGetLiveData";
import useCustomToast from "@/utils/toast";
import { useAuctionBid } from "@/services/live/auctions/bid/post";
import { errorMessageParser } from "@/utils/error";
import { addKey } from "@/utils/add-key";
import { AuctionLiveFilterParams } from "@/types/live/auctions";
import { useStopCar } from "@/services/live/auctions/stop/patch";

interface Props {
  filterParams: AuctionLiveFilterParams;
}

function LiveAuctionTab(props: Props) {
  const { filterParams } = props;
  const { searchText, status } = filterParams;
  const [openLog, setOpenLog] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [openViews, setOpenViews] = useState(false);
  const [openBid, setOpenBid] = useState(false);
  const [stopId, setStopId] = useState<string>("");
  const [eventId, setEventId] = useState<string>("");
  const [log, setLog] = useState<LiveAuctionItem>();
  const [params, setParams] = useState({
    page: 0,
    pageSize: 10,
  });

  // const { updateCar: update, isPending } = useUpdateCarById();
  const update = useStopCar();
  const bid = useAuctionBid();
  const toast = useCustomToast();

  const handleLogModal = () => {
    setOpenLog(!openLog);
  };

  const handleViewersModal = () => {
    setOpenViews(!openViews);
  };

  const handleBidModal = () => {
    setOpenBid(!openBid);
  };

  const handleLog = (logItem: LiveAuctionItem) => {
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
    update.mutate(
      {
        body: {
          status: "STOPPED",
          auctionOrOTBId: eventId,
        },
        id: stopId,
      },
      {
        onSuccess: () => {
          toast.success("Auction Stopped Successfully");
          handleStopModal();
        },
        onError: (err) => toast.error(errorMessageParser(err)),
      },
    );
  };

  const handleViewers = (item: LiveAuctionItem) => {
    setLog(item);
    setOpenViews(!openViews);
  };

  const handleBid = (item: LiveAuctionItem) => {
    handleBidModal();
    setLog(item);
  };

  const handleAdminBid = (amount: number) => {
    bid.mutate(
      {
        amount,
        carId: log?.carId ?? "",
      },
      {
        onSuccess: () => {
          toast.success("Bid Placed Successfully");
          handleBidModal();
        },
        onError: (err) => toast.error(errorMessageParser(err)),
      },
    );
  };

  const columns = useColumns({
    handleLog,
    handleStop,
    handleViewers,
    handleBid,
    type: "auction",
  });

  const { data, isLoading } = useGetLiveData({
    params,
    tab: "auction",
    filterParams,
  });
  const liveAuctions = data?.data;
  const hasSearch = searchText && searchText !== "";
  const hasFilters = hasSearch || status;

  const liveAuctionsWithId = addKey(liveAuctions, "id", "_id") ?? [];

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
        data={(liveAuctionsWithId ?? []) as any[]}
        type="auction"
        handleClose={handleLogModal}
        openLog={openLog}
        log={log}
        handleStop={handleStopModal}
        openStop={openStop}
        openViews={openViews}
        handleViewers={handleViewersModal}
        params={params}
        setParams={setParams}
        isFetching={isLoading}
        rowCount={data?.count ?? 10000}
        handleStopProceed={handleStopProceed}
        disableStopProceed={update.isPending}
      />
      <AuctionBidModal
        handleClose={handleBidModal}
        handleBid={handleAdminBid}
        data={liveAuctionsWithId ?? []}
        logId={log?._id ?? ""}
        openBid={openBid}
        disableBid={bid.isPending}
      />
    </div>
  );
}

export default LiveAuctionTab;
