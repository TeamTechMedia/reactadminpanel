import TabList from "@/components/ui/tabs/TabList";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import CustomerTabs from "../../../views/customers/tabContents/CustomerTabs";
import { useRouter } from "next/router";
import { useGetUser } from "@/services/users/get";
import { disableStatus } from "@/hooks/columns/customers";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import DealerDocumentVerifyBody from "@/views/customers/modals/DealerDocumentVerifyBody";
import FallbackSpinner from "@/components/ui/spinner/fallback";

const tabs = [
  {
    label: "Dealer Details",
    value: "dealer_details",
  },
  {
    label: "Documents",
    value: "documents",
  },
];

const CustomerView = () => {
  const [value, setValue] = useState(tabs[0].value);
  const router = useRouter();
  const id = router?.query?.id;

  const { data: dealer, isLoading } = useGetUser({
    params: {
      id: String(id),
    },
  });
  const dealerData = dealer?.data?.data?.[0];
  const cusId = dealerData?._id;
  const showVerfify = disableStatus.includes(dealerData?.isDocumentsVerified);
  const [open, setOpen] = useState(false);

  function handleVerifyModal() {
    setOpen(!open);
  }

  function handleVerify() {
    handleVerifyModal();
  }

  return isLoading ? (
    <FallbackSpinner />
  ) : (
    <>
      <Grid>
        <Grid paddingY={4}>
          <TabList tabOptions={tabs} value={value} setValue={setValue} />
        </Grid>
        <Grid mt={1}>
          <CustomerTabs data={dealerData} value={value} />
        </Grid>
        {!showVerfify && (
          <Grid mt={4} display={"flex"} gap={3}>
            <Button onClick={handleVerify} variant="contained">
              Verify
            </Button>
          </Grid>
        )}
      </Grid>
      <ConfirmModal
        dailogueTitle="Are you sure to verify?"
        handleClose={handleVerifyModal}
        icon="tabler:info-hexagon"
        iconSize={"1.5rem"}
        titleFont={20}
        open={open}
        ContentComponent={
          <DealerDocumentVerifyBody
            id={cusId}
            handleClose={handleVerifyModal}
            isView
          />
        }
      />
    </>
  );
};

export default CustomerView;
