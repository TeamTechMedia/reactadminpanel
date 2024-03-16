import TabList from "@/components/ui/tabs/TabList";
import { Grid } from "@mui/material";
import { useState } from "react";
import { CarTabTypes } from "@/types/cars/car";
import CarDetails from "../../../views/cars/tabContents/CarDetails";
import CarDocuments from "../../../views/cars/tabContents/CarDocuments";
import { useRouter } from "next/router";
import { useGetCar } from "@/services/cars/view/get";
import FallbackSpinner from "@/components/ui/spinner/fallback";
import { CarData } from "@/services/cars/list/types";
import { useGetCarReport } from "@/services/cars/report/get";
import CarExterior from "@/views/cars/tabContents/CarExterior";
import { tabs } from "@/data/cars/tabs";
import CarEngine from "@/views/cars/tabContents/CarEngine";
import CarInterior from "@/views/cars/tabContents/CarInterior";
import CarOther from "@/views/cars/tabContents/CarOther";
import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import generateCarPdf from "@/functions/cars/export/generate-pdf";
import { useGetCarDocs } from "@/services/cars/documents/get";
import useCustomToast from "@/utils/toast";
import { useQueryClient } from "@tanstack/react-query";
import AuctionDialogue from "@/views/cars/dailogue/AuctionDialogue";
import useUpdateCarById from "@/hooks/actions/cars/update-car";
import CarViewBottomActions from "@/views/cars/actions/CarViewBottomActions";

const CarsView = () => {
  const [value, setValue] = useState(tabs[0].value);
  const [openApprove, setOpenApprove] = useState(false);
  const router = useRouter();
  const id = String(router.query.id);
  const { data: car, isLoading, isFetched } = useGetCar(id as string);
  const carData = car?.data?.data?.[0] as CarData;
  const { data: carDocsData, isFetched: isDocFetched } = useGetCarDocs(
    id as string,
  );
  const carDocs = carDocsData?.data.data;

  const { data: carReports } = useGetCarReport(id as string);
  const carReportsData = carReports?.data.data;
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const updateCar = useUpdateCarById();

  function handleApprove() {
    setOpenApprove(!openApprove);
  }

  function handleApproveQC() {
    updateCar({
      body: {
        qcStatus: "VERIFIED",
      },
      id,
      handleSuccess: () => handleSuccess("QC Approved Successfully"),
    });
  }

  function handleSuccess(successMessage: string) {
    toast.success(successMessage);
    queryClient.invalidateQueries({ queryKey: ["car"] });
  }

  function handleRejectQC() {
    updateCar({
      body: {
        qcStatus: "REJECTED",
      },
      id,
      handleSuccess: () => handleSuccess("QC Rejected Successfully"),
    });
  }

  const tabComponents = {
    car_details: <CarDetails details={carData} />,
    documents: (
      <CarDocuments
        details={carReportsData}
        carDocs={carDocs}
        isFetched={isDocFetched}
      />
    ),
    exterior: <CarExterior details={carReportsData} />,
    engine: <CarEngine details={carReportsData} />,
    interior: <CarInterior details={carReportsData} />,
    others: <CarOther details={carReportsData} />,
  };

  function handleNext() {
    const currIndex = tabs.findIndex((tab) => tab.value === value);
    if (currIndex === -1 || currIndex === tabs.length - 1) return;
    const nextTabValue = tabs[currIndex + 1].value;
    setValue(nextTabValue);
  }

  function handleDownload() {
    generateCarPdf("download", carReportsData, carData, carDocs);
  }

  function handleOpen() {
    generateCarPdf("print", carReportsData, carData, carDocs);
  }

  if (isLoading) {
    return <FallbackSpinner />;
  }

  if (isFetched) {
    const showNext = tabs[tabs.length - 1].value !== value;
    const isPending = carData?.status === "PENDING_EVALUATION";
    const isVerified = carData?.qcStatus === "VERIFIED";

    return (
      <>
        <Grid>
          <Grid paddingY={4} display={"flex"} justifyContent={"space-between"}>
            <TabList tabOptions={tabs} value={value} setValue={setValue} />
            <Grid>
              <ButtonIcon
                icon="tabler:printer"
                onClick={handleOpen}
                title="Print as PDF"
                disabled={isPending}
              />
              <ButtonIcon
                icon="tabler:download"
                onClick={handleDownload}
                title="Export as PDF"
                disabled={isPending}
              />
            </Grid>
          </Grid>
          <Grid mt={1}>{tabComponents[value as CarTabTypes]}</Grid>
          <CarViewBottomActions
            handleApprove={handleApprove}
            handleNext={handleNext}
            handleApproveQC={handleApproveQC}
            handleRejectQC={handleRejectQC}
            isVerified={isVerified}
            showNext={showNext}
          />
        </Grid>
        <AuctionDialogue open={openApprove} setOpen={setOpenApprove} />
      </>
    );
  }
};

export default CarsView;
