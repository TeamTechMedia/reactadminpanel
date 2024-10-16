import { CarData } from "@/services/cars/list/types";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";
import { numberToINR } from "@/utils/convert-to-rs";
import { formatDateAndTime } from "@/utils/format-date-and-time";

const getCarData = (details: CarData) => {
  return [
    {
      label: "Id",
      value: details._id,
    },
    {
      label: "Unique Id",
      value: details.uniqueId,
    },
    {
      label: "Lead Id",
      value: details.leadUniqueId,
    },
    {
      label: "Car Name",
      value: details.model,
    },
    {
      label: "Make",
      value: details.make,
    },
    {
      label: "Fuel Type",
      value: capitaliseFirstLetter(details.fuelType),
    },
    {
      label: "QC Status",
      value: details.qcStatus,
      isChip: true,
    },
    {
      label: "Variant",
      value: details.variant,
    },
    {
      label: "Masked Register No.",
      value: details.maskedRegNumber,
    },
    {
      label: "No. of Owners",
      value: details.ownershipNumber,
    },
    {
      label: "Highest Bid",
      value: numberToINR(details.highestBid ?? 0),
    },
    {
      label: "Total Bidders",
      value: details.totalBidder ?? 0,
    },
    {
      label: "Status",
      value: details.status,
    },
    {
      label: "Vehicle Location",
      value: details.vehicleLocation,
    },
    {
      label: "Evaluated On",
      value: formatDateAndTime(details.createdAt),
    },
  ];
};

export default getCarData;
