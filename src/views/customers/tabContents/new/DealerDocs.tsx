import { ImageTile } from "@/components/ui/inputfields/ImageTile";
import ConfirmModal from "@/components/ui/modals/ConfirmModal";
import ButtonSpinner from "@/components/ui/spinner/button";
import { BorderWrapper } from "@/components/ui/wrappers/BorderWrapper";
import { Datum } from "@/services/dealers/list/types";
import { useUpdateDealer } from "@/services/users/patch";
import { DealerDocument } from "@/types/customers/file";
import { errorMessageParser } from "@/utils/error";
import useCustomToast from "@/utils/toast";
import { DealerCardContent } from "@/views/customers/cards/content/DealerCardContent";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

type VerificationType = "verify" | "reject";

interface Props {
  documents: DealerDocument[];
  data: Datum;
}

interface BodyProps {
  handleClose: () => void;
  handleSubmit: () => void;
  type: VerificationType;
  isLoading: boolean;
}

const dealerUploads: any = {
  "Front Image": "addressProofFront",
  "Back Image": "addressProofBack",
  "PAN Image": "panCard",
  "Shop Image": "shopPicture",
  "Visiting Card": "visitingCard",
  "Cheque Image": "canceledCheque",
};

const VerifyorRejectDocs = (props: BodyProps) => {
  const { handleClose, handleSubmit, type, isLoading } = props;
  return (
    <Grid p={3}>
      <Typography>
        Are you sure you want to {type}? Press Yes to Continue
      </Typography>
      <Grid mt={4} display={"flex"} justifyContent={"end"} gap={2}>
        <Button
          disabled={isLoading}
          onClick={handleClose}
          variant="outlined"
          color="error"
        >
          No
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Yes {isLoading && <ButtonSpinner />}
        </Button>
      </Grid>
    </Grid>
  );
};

const DealerDocs = (props: Props) => {
  const { documents, data } = props;
  const [imageType, setImageType] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState<VerificationType>("verify");
  const router = useRouter();
  const update = useUpdateDealer();
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  function handleUpload(file: File, closeModal: () => void) {
    const formData = new FormData();
    const key = dealerUploads[imageType];
    formData.append(key, file);
    update.mutate(
      {
        id: String(router.query.id),
        body: formData as any,
      },
      {
        onError: (err) => toast.error(errorMessageParser(err)),
        onSuccess: () => handleSuccess("Uploaded Successfully!", closeModal),
      },
    );
  }

  function handleSuccess(message: string, closeModal: () => void) {
    queryClient.invalidateQueries({
      queryKey: ["user"],
    });
    toast.success(message);
    closeModal();
  }

  function handleConfirm(type: VerificationType) {
    handleConfirmClose();
    setConfirm(type);
  }

  function handleConfirmClose() {
    setOpen(!open);
  }

  function handleDocumentVerification() {
    update.mutate(
      {
        id: String(router.query.id),
        body: {
          isDocumentsVerified: confirm === "verify" ? "VERIFIED" : "REJECTED",
        },
      },
      {
        onSuccess: () =>
          handleSuccess("Updated Successfully", handleConfirmClose),
        onError: (err) => toast.error(errorMessageParser(err)),
      },
    );
  }

  const isVerified = data?.isDocumentsVerified === "VERIFIED";
  const isRejected = data?.isDocumentsVerified === "REJECTED";

  return (
    <>
      {" "}
      <Card>
        <CardContent>
          <DealerCardContent
            heading="Document Upload Section"
            subHeading="Here, you can verify the documents uploaded by the dealer and manually add documents from the admin side."
          />
          <Grid container>
            {documents.map((document) => {
              return (
                <Grid item xs={6} key={document.name} padding={1} marginTop={3}>
                  <Typography fontWeight={600}>{document.name}</Typography>
                  <Grid display={"flex"} gap={3} marginTop={2}>
                    <BorderWrapper>
                      {document.images.map((image) => {
                        return (
                          <Grid
                            key={image.url}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                          >
                            <Typography fontWeight={500}>
                              {image.label}
                            </Typography>
                            <ImageTile
                              url={image.url}
                              handleBtnUpload={handleUpload}
                              handleOnClick={() => setImageType(image.label)}
                              isUploading={update.isPending}
                            />
                            <Typography fontWeight={400} fontSize={14}>
                              {image.url ? "Uploaded" : "Not Uploaded"}
                            </Typography>
                          </Grid>
                        );
                      })}
                    </BorderWrapper>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
        <Grid p={3} display={"flex"} justifyContent={"end"} gap={2}>
          <Button
            onClick={() => handleConfirm("reject")}
            variant="outlined"
            color="error"
            disabled={isRejected}
          >
            Reject
          </Button>
          <Button
            onClick={() => handleConfirm("verify")}
            variant="contained"
            color="primary"
            disabled={isVerified}
          >
            Verify
          </Button>
        </Grid>
      </Card>
      <ConfirmModal
        open={open}
        ContentComponent={
          <VerifyorRejectDocs
            type={confirm}
            handleClose={handleConfirmClose}
            handleSubmit={handleDocumentVerification}
            isLoading={update.isPending}
          />
        }
        dailogueTitle={`Confirmation Needed`}
        handleClose={handleConfirmClose}
        icon="tabler:info"
      />
    </>
  );
};

export default DealerDocs;
