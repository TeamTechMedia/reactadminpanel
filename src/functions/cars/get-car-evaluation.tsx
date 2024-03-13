import { CarReportData } from "@/services/cars/report/types";

const getCarEvaluation = (data: CarReportData) => {
  const evaluation = [
    {
      label: "Evaluator Name",
      value: data?.evaluatorName,
    },
    {
      label: "Evaluator Id",
      value: data?.userId,
    },
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
      value: data?.taxValidity,
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
      value: data?.regState,
    },
    {
      label: "RTO",
      value: data?.rto,
    },
    {
      label: "Vehicle Location",
      value: data?.allCarInfo?.vehicleLocation,
    },
    {
      label: "Engine CC",
      value: data?.engineCC,
    },
    {
      label: "Number of Cylinders",
      value: data?.allCarInfo?.engineCylinder,
    },
    {
      label: "Vehicle Usage",
      value: data?.vehicleUsage,
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
      value: data?.seats,
    },
    {
      label: "Duplicate Key",
      value: data?.duplicateKey,
    },
    {
      label: "RC Availability",
      value: data?.rcAvailability,
    },
    {
      label: "Transmission",
      value: data?.allCarInfo?.transmission,
    },
    {
      label: "Customer Price",
      value: data?.customerPrice,
    },
    {
      label: "Odometer Working",
      value: data?.odometerWorking,
    },
    {
      label: "Odometer Reading",
      value: data?.odometerReading,
    },
    {
      label: "Accidental",
      value: data?.accidential,
    },
    {
      label: "OEM Warranty",
      value: data?.oemWarrantyRemain,
    },
    {
      label: "Number of OEM Months Remaining",
      value: data?.oemMonthRemain,
    },
    {
      label: "Number of OEM Kms Remaining",
      value: data?.oemKmRemain,
    },
    {
      label: "Remarks",
      value: data?.evaluationRemarks,
    },
  ];

  return {
    evaluation,
  };
};

export default getCarEvaluation;
