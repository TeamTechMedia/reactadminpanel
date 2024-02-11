import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

const carData = [
  {
    label: "Name",
    value: "Ananthakrishnan",
  },
  {
    label: "Status",
    value: "Not Verified",
  },
  {
    label: "Phone Number",
    value: "+91 99999 99999",
  },
  {
    label: "Business Name As per GSTIN",
    value: "Ananthakrishnan A",
  },
  {
    label: "Business Address",
    value: "Customer One One Customer One One, Kozhikode, Kerala",
  },
  {
    label: "Pincode",
    value: "670500",
  },
  {
    label: "District, State",
    value: "Kozhikode, Kerala",
  },
  {
    label: "Security Deposit",
    value: "Kozhikode, Kerala",
  },
];

const CarDetails = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {carData.map((data) => {
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
  );
};

export default CarDetails;
