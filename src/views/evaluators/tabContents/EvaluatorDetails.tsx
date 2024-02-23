import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { getEvaluatorData } from "@/functions/evaluators/get-evaluator-data";
import { EvaluatorViewResponse } from "@/services/evaluators/view/types";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";

interface EvaluatorDetailsProps {
  data: EvaluatorViewResponse | undefined;
}

const EvaluatorDetails = (props: EvaluatorDetailsProps) => {
  const { data } = props;
  const router = useRouter();
  const evaluatorData = getEvaluatorData(data);

  function handleRoute(id: string) {
    router.push(`/cars/${id}`);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {evaluatorData?.map((data) => {
            const isCarEvaluated = data?.label === "Cars Evaluated";

            return (
              <TableRow key={data.label}>
                <TableCell component="th" scope="row">
                  {data.label}
                </TableCell>
                {isCarEvaluated ? (
                  <TableCell>
                    {Array.isArray(data.value) &&
                      data.value.map((id) => {
                        return (
                          <Grid key={id} display={"flex"}>
                            <ClickableTypography
                              name={id}
                              onClick={() => handleRoute(id)}
                            />
                          </Grid>
                        );
                      })}
                  </TableCell>
                ) : (
                  <TableCell>{data.value}</TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EvaluatorDetails;
