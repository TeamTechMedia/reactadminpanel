import { ImageTile } from "@/components/ui/inputfields/ImageTile";
import { BorderWrapper } from "@/components/ui/wrappers/BorderWrapper";
import { useUpdateDealer } from "@/services/users/patch";
import { DealerDocument } from "@/types/customers/file";
import { errorMessageParser } from "@/utils/error";
import useCustomToast from "@/utils/toast";
import { DealerCardContent } from "@/views/customers/cards/content/DealerCardContent";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  documents: DealerDocument[];
}

const dealerUploads: any = {
  "Front Image": "addressProofFront",
  "Back Image": "addressProofBack",
  "PAN Image": "panCard",
  "Shop Image": "shopPicture",
  "Visiting Card": "visitingCard",
  "Cheque Image": "canceledCheque",
};

const DealerDocs = (props: Props) => {
  const { documents } = props;
  const [imageType, setImageType] = useState<any>("");
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
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["user"],
          });
          toast.success("Uploaded Successfully!");
          closeModal();
        },
      },
    );
  }
  return (
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
    </Card>
  );
};

export default DealerDocs;
