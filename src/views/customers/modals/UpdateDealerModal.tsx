import CustomDialogue from "@/components/ui/dialogue/AuctionDailogue";
import { Breakpoint } from "@mui/material";
import { UpdateCustomerBasic } from "./content/UpdateCustomerBasic";

type ModalTypes = "customer_details";

interface Props {
  type: ModalTypes;
  open: boolean;
  handleClose: () => void;
}

const data = {
  customer_details: {
    title: "Customer Details",
    icon: "tabler:edit",
    maxWidth: "md",
  },
};

export const UpdateDealerModal = (props: Props) => {
  const { type, open, handleClose } = props;

  const modals = {
    customer_details: <UpdateCustomerBasic handleClose={handleClose} />,
  };

  return (
    <CustomDialogue
      open={open}
      dailogueTitle={data[type].title}
      handleClose={handleClose}
      ComponentContent={modals[type]}
      icon={data[type].icon}
      maxWidth={data[type].maxWidth as false | Breakpoint | undefined}
      titleFont={20}
      titleWeight={600}
      iconSize="1.5rem"
    />
  );
};
