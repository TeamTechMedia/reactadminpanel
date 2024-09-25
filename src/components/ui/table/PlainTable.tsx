import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

const tableStyle = {
  border: "0.5px solid rgba(224, 224, 224, 1)",
  backgroundColor: "ButtonFace",
};

export interface TableProps {
  label: string;
  value: string | number | null;
}

interface Props {
  data: TableProps[];
}

export const PlainTable = (props: Props) => {
  const { data } = props;
  return (
    <Table aria-label="dealer status table">
      <TableBody>
        {data.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={tableStyle}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.label}
                </Typography>
              </TableCell>
              <TableCell align="left" sx={tableStyle}>
                <Typography variant="body1">{item.value ?? "-"}</Typography>{" "}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
