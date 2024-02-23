import { getEvaluatorData } from "@/functions/evaluators/get-evaluator-data";
import { EvaluatorViewResponse } from "@/services/evaluators/view/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

interface EvaluatorDetailsProps {
  data: EvaluatorViewResponse | undefined;
}

const EvaluatorDetails = (props: EvaluatorDetailsProps) => {
  const { data } = props;

  const evaluatorData = getEvaluatorData(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {evaluatorData?.map((data) => {
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

export default EvaluatorDetails;
