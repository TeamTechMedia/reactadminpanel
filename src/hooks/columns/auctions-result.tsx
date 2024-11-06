import { AmountTypography } from "@/components/ui/containers/AmountTypography";
import { ClickableTypography } from "@/components/ui/containers/ClickableTypography";
import { getWinner } from "@/functions/results/get-winner";
import { LeaderBoard } from "@/services/result/auction/types";
import { handleRedirection } from "@/utils/handle-redirection";
import { ModalAction } from "@/views/auctions/modals/AuctionLogBody";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface AuctionResultColsProps {
  handleModal: (
    type: ModalAction,
    fullname: string,
    id: string,
    userId: string,
  ) => void;
  winner: string;
  leaderBoard: LeaderBoard[] | [object];
}

export default function useColumns(props: AuctionResultColsProps) {
  const { handleModal, winner, leaderBoard } = props;
  const winnerData = getWinner(leaderBoard as LeaderBoard[], winner);
  const isWinnerRejected = winner && winnerData?.isRejected;
  const router = useRouter();
  const columns = [
    {
      flex: 0.012,
      field: "dealerID",
      minWidth: 110,
      headerName: "Dealer ID",
      headerClassName: "super-app-theme--header",
      renderCell: ({ row }: any) => {
        const { uniqueId, userId } = row;

        return (
          <ClickableTypography
            name={uniqueId}
            onClick={() => handleRedirection("dealers", userId, router)}
          />
        );
      },
    },
    {
      flex: 0.03,
      field: "name",
      minWidth: 120,
      headerName: "Dealer Name",
      renderCell: ({ row }: any) => {
        const { fullname, userId } = row;
        return (
          <ClickableTypography
            name={fullname ?? "-"}
            onClick={() => handleRedirection("dealers", userId, router)}
          />
        );
      },
    },
    {
      flex: 0.03,
      field: "phone",
      minWidth: 50,
      headerName: "Phone",
      renderCell: ({ row }: any) => {
        const { contactNo } = row;
        return <Typography noWrap>{contactNo ?? "-"}</Typography>;
      },
    },
    {
      flex: 0.03,
      field: "currentBid",
      minWidth: 50,
      headerName: "Current Bid",
      renderCell: ({ row }: any) => {
        const { amount } = row;
        return <AmountTypography text={amount} />;
      },
    },
    {
      flex: 0.04,
      field: "action",
      minWidth: 100,
      headerName: "Actions",
      renderCell: ({ row }: any) => {
        const { isRejected, fullname, id, userId } = row;
        const isWinner = userId === winner;
        const disableChoose = !isWinnerRejected;
        console.log(row, "rowCheck");

        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isWinner || isRejected ? (
              <Button
                onClick={() => handleModal("Reject", fullname, id, userId)}
                disabled={isRejected}
                variant={"contained"}
                color="error"
              >
                {isRejected ? "Rejected" : "Reject"}
              </Button>
            ) : (
              <Button
                onClick={() => handleModal("Choose", fullname, id, userId)}
                disabled={disableChoose}
                variant="contained"
                color="primary"
              >
                Choose
              </Button>
            )}
            {isWinner && (
              <Button
                onClick={() => handleModal("Accept", fullname, id, userId)}
                variant="contained"
              >
                Accept
              </Button>
            )}
          </Box>
        );
      },
    },
  ];

  return columns;
}
