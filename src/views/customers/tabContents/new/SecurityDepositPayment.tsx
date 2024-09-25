import { PaymentChip } from "@/components/chips/PaymentChip";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const SecurityDepositPayment = () => {
  return (
    <Grid paddingX={3} marginBottom={3}>
      <Grid display={"flex"} gap={3}>
        <Typography fontWeight={600} fontSize={24}>
          {" "}
          ₹ 10,000
        </Typography>
        <PaymentChip title="Unpaid" color="error" />
      </Grid>
      <Grid marginTop={2}>
        <TableContainer component={Grid}>
          <Table aria-label="dealer status table">
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "0.5px solid rgba(224, 224, 224, 1)",
                    backgroundColor: "ButtonFace",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Dealer Status
                  </Typography>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    border: "0.5px solid rgba(224, 224, 224, 1)",
                    backgroundColor: "ButtonFace",
                  }}
                >
                  <Typography variant="body1">Unverified</Typography>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
