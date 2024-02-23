import TabList from "@/components/ui/tabs/TabList";
import { useGetEvaluator } from "@/services/evaluators/view/get";
import CustomerDocuments from "@/views/customers/tabContents/CustomerDocuments";
import EvaluatorDetails from "@/views/evaluators/tabContents/EvaluatorDetails";
import { Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

type EvaluatorTabTypes = "evaluator_details" | "documents";

const tabs = [
  {
    label: "Evaluator Details",
    value: "evaluator_details",
  },
  {
    label: "Documents",
    value: "documents",
  },
];

const EvaluatorPage = () => {
  const [value, setValue] = useState(tabs[0].value);
  const router = useRouter();
  const id = router.query.id;
  const { data } = useGetEvaluator(id as string);
  const evaluator = data?.data?.data?.[0];

  const tabComponents = {
    evaluator_details: <EvaluatorDetails data={evaluator} />,
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
