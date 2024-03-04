import { CarDocs } from "@/services/cars/documents/types";

const getCarDocData = (data?: CarDocs) => {
  const {
    insurance,
    insuranceCompany,
    insuranceIDV,
    insuranceMismatch,
    insuranceValidity,
    interStateTransfer,
    ncb,
    hypothecation,
    bankName,
    loanNoc,
    loanStatus,
    form35,
    rcMismatch,
    remarks,
  } = data || {};
  const documents = [
    {
      label: "Inter State Transfer",
      value: interStateTransfer,
    },
    {
      label: "Insurance",
      value: insurance,
    },
    {
      label: "Insurance Company",
      value: insuranceCompany,
    },
    {
      label: "Insurance IDV (Insured Declared Value)",
      value: insuranceIDV,
    },
    {
      label: "Insurance Validity",
      value: insuranceValidity,
    },
    {
      label: "NCB (No Claim Bonus)",
      value: ncb,
    },
    {
      label: "NCB Percentage",
      value: "-",
    },
    {
      label: "Under Hypothecation",
      value: hypothecation,
    },
    {
      label: "Bank Name",
      value: bankName,
    },
    {
      label: "Loan Closed or Not",
      value: loanStatus,
    },
    {
      label: "Loan NOC (No Objection Certificate)",
      value: loanNoc,
    },
    {
      label: "Form 35",
      value: form35,
    },
    {
      label: "RC Mismatch",
      value: rcMismatch,
    },
    {
      label: "Insurance Mismatch",
      value: insuranceMismatch,
    },
    {
      label: "Remarks",
      value: remarks,
    },
  ];

  return {
    documents,
  };
};

export default getCarDocData;
