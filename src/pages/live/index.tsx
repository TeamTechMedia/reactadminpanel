import TabList from "@/components/ui/tabs/TabList";
import { LiveTabTypes } from "@/types/live/auctions";
import SearchHeaders from "@/views/live/header/searchHeader";
import LiveAuctionTab from "@/views/live/tabs/LiveAuctionTab";
import LiveOtbTab from "@/views/live/tabs/LiveOtbTab";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const tabs = [
  {
    label: "Auctions",
    value: "auction",
  },
  {
    label: "OTB",
    value: "otb",
  },
];

const tabComponents = {
  auction: <LiveAuctionTab />,
  otb: <LiveOtbTab />,
};

function LiveHome() {
  const [tabValue, setTabValue] = useState(tabs[0].value);
  const { control } = useForm();
  return (
    <div>
      <TabList tabOptions={tabs} value={tabValue} setValue={setTabValue} />
      <SearchHeaders control={control} />
      <Grid mt={1}>{tabComponents[tabValue as LiveTabTypes]}</Grid>
    </div>
  );
}

export default LiveHome;
