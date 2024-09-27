import { ImageTile } from "@/components/ui/inputfields/ImageTile";
import { BorderWrapper } from "@/components/ui/wrappers/BorderWrapper";
import { DealerDocument } from "@/types/customers/file";
import { DealerCardContent } from "@/views/customers/cards/content/DealerCardContent";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface Props {
  documents: DealerDocument[];
}

const DealerDocs = (props: Props) => {
  const { documents } = props;
  function handleUpload(file: File) {
    const formData = new FormData();
    formData.append("file", file);
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
