import TabList from "@/components/ui/tabs/TabList";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import CustomerTabs from "../../../views/customers/tabContents/CustomerTabs";
import CustomerDocuments from "../../../views/customers/tabContents/CustomerDocuments";
import { CustomerTabTypes } from "../../../types/customers/tabType";

const tabs = [
  {
    label: "Customer Details",
    value: "customer_details",
  },
  {
    label: "Documents",
    value: "documents",
  },
];

const CustomerView = () => {
  const [value, setValue] = useState(tabs[0].value);

  const tabComponents = {
    customer_details: <CustomerTabs value={value} />,
    documents: <CustomerDocuments />,
  };

  return (
    <>
      <Grid>
        <Grid paddingY={4}>
          <TabList tabOptions={tabs} value={value} setValue={setValue} />
        </Grid>
        <Grid mt={1}>{tabComponents[value as CustomerTabTypes]}</Grid>
        <Grid mt={4} display={"flex"} gap={3}>
          <Button variant="contained">Verify</Button>
          <Button variant="outlined">Block</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerView;
