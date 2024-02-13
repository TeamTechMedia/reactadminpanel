import { CarData } from "@/services/cars/list/types";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import getCarData from "../../functions/get-car-data";
import { QCStatusType, getQCColor } from "@/functions/cars/get-qc-color";
import { ChipColorType } from "@/types/color/chipColor";

interface CarDetailProps {
  details: CarData;
}

const CarDetails = (props: CarDetailProps) => {
  const { details } = props;
  const carData = getCarData(details);

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
                <TableCell>
                  {data.isChip ? (
                    <Chip
                      variant="outlined"
                      color={
                        getQCColor(data.value as QCStatusType) as ChipColorType
                      }
                      label={data.value}
                    />
                  ) : (
                    data.value
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarDetails;
