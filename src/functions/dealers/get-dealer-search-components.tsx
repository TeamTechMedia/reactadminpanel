import { dealerStatus } from "@/data/dealers/search_types";
import { deposit } from "@/data/dealers/security_deposit";
import { districts } from "@/data/leads/districts";

export const getDealerSearch = (searchBy: null | string) => {
  switch (searchBy) {
    case "userId":
      return {
        type: "text",
        label: "User ID",
      };
    case "district":
      return {
        type: "drop_down",
        label: "Location",
        data: districts,
      };
    case "isDeposited":
      return {
        type: "drop_down",
        label: "Security Deposit",
        data: deposit,
      };
    case "isDocumentsVerified":
      return {
        type: "drop_down",
        label: "Status",
        data: dealerStatus,
      };
    case "businessName":
      return {
        type: "text",
        label: "Name",
      };
    case "contactNo":
      return {
        type: "text",
        label: "Contact Number",
      };
    default:
      return {
        type: "hide",
      };
  }
};
