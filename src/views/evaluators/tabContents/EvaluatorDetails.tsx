import { ButtonIcon } from "@/components/ui/buttons/ButtonIcon";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { getEvaluatorData } from "@/functions/evaluators/get-evaluator-data";
import { EvaluatorViewResponse } from "@/services/evaluators/view/types";
import useCustomToast from "@/utils/toast";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

interface EvaluatorDetailsProps {
  data: EvaluatorViewResponse | undefined;
}

interface Ids {
  carId: string;
  uniqueId: string;
}

interface EvaluatedCarProps {
  data: any;
  handleRoute: (id: string) => void;
}

const EvaluatedCarCells = (props: EvaluatedCarProps) => {
  const { data, handleRoute } = props;
  return (
    <TableCell>
      {Array.isArray(data.value) &&
        data.value.map((ids: Ids) => {
          return (
            <Grid key={ids.carId} display={"flex"}>
              <ClickableTypography
                name={ids.uniqueId}
                onClick={() => handleRoute(ids.carId)}
              />
            </Grid>
          );
        })}
    </TableCell>
  );
};

const EncryptedCells = ({ data }: { data: any }) => {
  const [show, setShow] = useState(false);
  const [copy, setCopy] = useState(false);
  const toast = useCustomToast();

  function handleEncrypted() {
    setShow(!show);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(data.value);
    if (!copy) {
      setCopy(!copy);
      toast.success("Password Saved to Clipboard");
    }
  }

  return (
    <TableCell sx={{ display: "flex", alignItems: "center" }}>
      <Typography>{show ? (data.value as any) : "********"}</Typography>
      <Grid ml={2}>
        <ButtonIcon
          onClick={handleEncrypted}
          icon={show ? "tabler:eye-off" : "tabler:eye"}
        />
        <ButtonIcon
          onClick={handleCopy}
          icon={copy ? "tabler:copy-check" : "tabler:copy"}
        />
      </Grid>
    </TableCell>
  );
};

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
            const isEncrypt = data?.encrypt;

            return (
              <TableRow key={data.label}>
                <TableCell component="th" scope="row">
                  {data.label}
                </TableCell>
                {isCarEvaluated ? (
                  <EvaluatedCarCells data={data} handleRoute={handleRoute} />
                ) : isEncrypt ? (
                  <EncryptedCells data={data} />
                ) : (
                  <TableCell>{data.value as any}</TableCell>
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
