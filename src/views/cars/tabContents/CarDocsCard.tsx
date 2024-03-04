import { FileTile } from "@/components/ui/utility/FileTile";
import { CarDocsCardProps, DocumentsType } from "@/types/documents/fileTile";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const DocumentCard = ({ document }: { document: DocumentsType }) => {
  return (
    <Grid display={"flex"}>
      <Grid
        display={"flex"}
        padding={1}
        border={2}
        borderColor={"#D9D9D9"}
        borderRadius={1}
      >
        <FileTile file={document} />
      </Grid>
    </Grid>
  );
};

const CarDocsCard = (props: CarDocsCardProps) => {
  const { documents } = props;
  return (
    <Card>
      <CardContent>
        <Grid container>
          {documents.map((doc, index) => (
            <Grid
              key={doc.type}
              display={"flex"}
              gap={1}
              flexDirection={"column"}
              item
              xl={3}
              md={3}
              sm={4}
              xs={6}
            >
              <Typography fontSize={17} fontWeight={500} marginTop={2}>
                {doc.type}
              </Typography>
              <DocumentCard key={index} document={doc} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CarDocsCard;
