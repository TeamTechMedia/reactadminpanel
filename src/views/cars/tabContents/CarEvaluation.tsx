import {
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

interface CarEvaluationProps {
  data: { label: string; value?: string | number }[];
  title: string;
}

const CarEvaluation = (props: CarEvaluationProps) => {
  const { data, title } = props;
  if (data.length > 0) {
    return (
      <Card>
        <CardHeader title={title} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {data?.map((item) => {
                return (
                  <TableRow key={item.label}>
                    <TableCell component="th" scope="row" width={50}>
                      {item.label}
                    </TableCell>
                    <TableCell component="th" scope="row" width={50}>
                      {item.value}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
  }
};

export default CarEvaluation;
