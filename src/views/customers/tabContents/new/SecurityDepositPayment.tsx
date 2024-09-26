import { PaymentChip } from "@/components/ui/chips/PaymentChip";
import { numberToINR } from "@/utils/convert-to-rs";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export const SecurityDepositPayment = ({
  isDeposited,
  amount,
}: {
  isDeposited: boolean;
  amount: number;
}) => {
  return (
    <Grid paddingX={3} marginBottom={3}>
      <Grid display={"flex"} gap={3}>
        <Typography fontWeight={600} fontSize={24}>
          {" "}
          {numberToINR(amount)}
        </Typography>
        <PaymentChip
          title={isDeposited ? "Paid" : "Unpaid"}
          color={isDeposited ? "success" : "error"}
        />
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
                  <Typography variant="body1">
                    {isDeposited ? "Verified" : "Unverified"}
                  </Typography>{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
