import CustomDialogue from "@/components/ui/dialogue/AuctionDailogue";
import { Breakpoint } from "@mui/material";
import { UpdateCustomerBasic } from "./content/UpdateCustomerBasic";
import { UpdateContactInfo } from "./content/UpdateContactInfo";
import { UpdateNotes } from "./content/UpdateNote";
import { UpdateCarNotes } from "./content/UpdateCarNotes";

type ModalTypes = "customer_details" | "contact_info" | "notes" | "car_models";

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
  contact_info: {
    title: "Contact Info",
    icon: "tabler:user",
    maxWidth: "xs",
  },
  notes: {
    title: "Notes",
    icon: "tabler:note",
    maxWidth: "sm",
  },
  car_models: {
    title: "Preferred Car Models",
    icon: "tabler:car",
    maxWidth: "sm",
  },
};

export const UpdateDealerModal = (props: Props) => {
  const { type, open, handleClose } = props;

  const modals = {
    customer_details: <UpdateCustomerBasic handleClose={handleClose} />,
    contact_info: <UpdateContactInfo handleClose={handleClose} />,
    notes: <UpdateNotes handleClose={handleClose} />,
    car_models: <UpdateCarNotes handleClose={handleClose} />,
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
