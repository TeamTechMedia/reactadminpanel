import { CarReportData } from "@/services/cars/report/types";

const getCarEvaluation = (data: CarReportData) => {
  const evaluation = [
    {
      label: "Seller Name",
      value: data?.sellerName,
    },
    {
      label: "Seller Address",
      value: data?.sellerAddress,
    },
    {
      label: "Seller Phone Number",
      value: data?.sellerMobileNumber,
    },
    {
      label: "Registered",
      value: data?.isCarRegistered,
    },
    {
      label: "Registration Number",
      value: data?.regNumber,
    },
    {
      label: "Engine Number",
      value: data?.engineNumber,
    },
    {
      label: "Chassis Number",
      value: data?.chasisNumber,
    },
    {
      label: "RC Owner Name",
      value: data?.rcOwnerName,
    },
    {
      label: "RC Owner Phone Number",
      value: data?.rcOwnerMobileNumber,
    },
    {
      label: "Date of Registration",
      value: data?.regDate,
    },
    {
      label: "Registration Validity",
      value: data?.regValidity,
    },
    {
      label: "Tax Validity",
      value: "Tax Validity",
    },
    {
      label: "Fuel",
      value: data?.allCarInfo?.fuelType,
    },
    {
      label: "Ownership Number",
      value: data?.allCarInfo?.ownershipNumber,
    },
    {
      label: "Registration State",
      value: "Registration State",
    },
    {
      label: "RTO",
      value: "RTO",
    },
    {
      label: "Vehicle Location",
      value: data?.allCarInfo?.vehicleLocation,
    },
    {
      label: "Engine CC",
      value: "Engine CC",
    },
    {
      label: "Number of Cylinders",
      value: data?.allCarInfo?.engineCylinder,
    },
    {
      label: "Vehicle Usage",
      value: "Vehicle Usage",
    },
    {
      label: "Month & Year of Manufacturing",
      value: data?.monthAndYearOfManufacture,
    },
    {
      label: "Car Maker's Name (Brand)",
      value: data?.allCarInfo?.make,
    },
    {
      label: "Car Model Name",
      value: data?.allCarInfo?.model,
    },
    {
      label: "Car Variant",
      value: data?.allCarInfo?.variant,
    },
    {
      label: "Colour",
      value: data?.color,
    },
    {
      label: "Body Type",
      value: data?.bodyType,
    },
    {
      label: "Seating Capacity",
      value: "Seating Capacity",
    },
    {
      label: "Duplicate Key",
      value: "Duplicate Key",
    },
    {
      label: "RC Availability",
      value: data?.rcAvailability,
    },
    {
      label: "Transmission",
      value: "Transmission",
    },
    {
      label: "Customer Price",
      value: data?.customerPrice,
    },
    {
      label: "Odometer Working",
      value: "Odometer Working",
    },
    {
      label: "Odometer Reading",
      value: data?.odometerReading,
    },
    {
      label: "Accidental",
      value: "Accidental",
    },
    {
      label: "OEM Warranty",
      value: "OEM Warranty",
    },
    {
      label: "Number of OEM Months Remaining",
      value: "Number of OEM Months Remaining",
    },
    {
      label: "Number of OEM Kms Remaining",
      value: "Number of OEM Kms Remaining",
    },
    {
      label: "Remarks",
      value: "Remarks",
    },
  ];

  return {
    evaluation,
  };
};

export default getCarEvaluation;
