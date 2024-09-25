import { Dealer } from "@/types/customers/get";
import { numberToINR } from "@/utils/convert-to-rs";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { AdditionalDealerInfo } from "./new/AdditionalDealerInfo";
import { InternalNotes } from "./new/InternalNotes";
import { SecurityDeposit } from "./new/SecurityDeposit";
import { PreferredCars } from "./new/PreferredCars";
import { AccountInfo } from "./new/AccountInfo";
import { UpdateDealerModal } from "../modals/UpdateDealerModal";
import { useState } from "react";

function getCustomerData(data: Dealer) {
  return [
    {
      label: "Customer Name",
      value: data?.fullname,
    },
    {
      label: " Dealer Status",
      value: data?.isBlocked ? "Blocked" : "Active",
    },
    {
      label: "Document Status",
      value: data?.isDocumentsVerified,
    },
    {
      label: "Phone Number",
      value: data?.contactNo,
    },
    {
      label: "Business Name As per GSTIN",
      value: data?.businessName,
    },
    {
      label: "Business Address",
      value: data?.businessAddress,
    },
    {
      label: "Pincode",
      value: data?.pincode,
    },
    {
      label: "District, State",
      value: `${data?.district ?? ""}`,
    },
    {
      label: "Security Deposit",
      value: numberToINR(data?.depositedAmount),
    },
  ];
}

const CustomerDetails = ({ data }: { data: Dealer }) => {
  const customerData = getCustomerData(data);
  const [open, setOpen] = useState(false);
  function handleModal() {
    setOpen(!open);
  }
  return (
    <>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingBottom={2}
      >
        <Typography fontWeight={600} fontSize={18} textAlign={"center"}>
          Customer Details
        </Typography>
        <Button variant="contained" onClick={handleModal}>
          Edit
        </Button>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableBody>
            {customerData?.map((data) => {
              return (
                <TableRow key={data.label}>
                  <TableCell component="th" scope="row">
                    {data.label}
                  </TableCell>
                  <TableCell>{data.value}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid display={"flex"} flexDirection={"column"} gap={3}>
        <AdditionalDealerInfo />
        <InternalNotes />
        <SecurityDeposit />
        <PreferredCars />
        <AccountInfo />
      </Grid>
      <UpdateDealerModal
        type="customer_details"
        open={open}
        handleClose={handleModal}
      />
    </>
  );
};

export default CustomerDetails;
