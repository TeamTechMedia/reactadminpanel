import TabList from "@/components/ui/tabs/TabList";
import CustomerDocuments from "@/pages/customers/[id]/components/tabs/CustomerDocuments";
import CustomerTabs from "@/pages/customers/[id]/components/tabs/CustomerTabs";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

type EvaluatorTabTypes = "customer_details" | "documents";

const tabs = [
  {
    label: "Evaluator Details",
    value: "customer_details",
  },
  {
    label: "Documents",
    value: "documents",
  },
];

const EvaluatorPage = () => {
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
        <Grid mt={1}>{tabComponents[value as EvaluatorTabTypes]}</Grid>
        <Grid mt={4} display={"flex"} gap={3}>
          <Button color="error" variant="outlined">
            Block
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EvaluatorPage;
