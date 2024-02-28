import TabList from "@/components/ui/tabs/TabList";
import { useUpdateEvaluator } from "@/services/evaluators/update/patch";
import { useGetEvaluator } from "@/services/evaluators/view/get";
import useCustomToast from "@/utils/toast";
import CustomerDocuments from "@/views/customers/tabContents/CustomerDocuments";
import EvaluatorDetails from "@/views/evaluators/tabContents/EvaluatorDetails";
import { Button, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
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
  const isBlocked = evaluator?.isBlocked;
  const update = useUpdateEvaluator();
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const tabComponents = {
    evaluator_details: <EvaluatorDetails data={evaluator} />,
    documents: <CustomerDocuments />,
  };

  function handleBlock() {
    const isBlockedValue = !isBlocked;
    update.mutate(
      {
        body: { isBlocked: isBlockedValue },
        id: router.query.id as string,
      },
      {
        onSuccess: () => {
          const successMessage = isBlockedValue
            ? "Evaluator Blocked Successfully"
            : "Evaluator Approved Successfully";
          toast.success(successMessage);
          queryClient.invalidateQueries({
            queryKey: ["evaluators"],
          });
        },
      },
    );
  }

  return (
    <>
      <Grid>
        <Grid paddingY={4}>
          <TabList tabOptions={tabs} value={value} setValue={setValue} />
        </Grid>
        <Grid mt={1}>{tabComponents[value as EvaluatorTabTypes]}</Grid>
        <Grid mt={4} display={"flex"} gap={3}>
          <Button
            onClick={handleBlock}
            color={isBlocked ? "success" : "error"}
            variant="outlined"
          >
            {isBlocked ? "Approve" : "Block"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EvaluatorPage;
