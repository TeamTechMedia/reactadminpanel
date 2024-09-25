import React from "react";
import CustomerDetails from "./CustomerDetails";
import { CustomerTabTypes } from "../../../types/customers/tabType";
import { Dealer } from "@/types/customers/get";
import DealerDocuments from "./new/DealerDocuments";
import { DealerActivity } from "./new/DealerActivity";
import DealerPerformance from "./new/DealerPerformance";
import { createContext } from "react";

interface CustomerTabsProps {
  value: string;
  data: Dealer;
}

export const DealerContext = createContext<Dealer | null>(null);

export default function CustomerTabs(props: CustomerTabsProps) {
  const { value, data } = props;
  const CustomerTabs = {
    dealer_details: <CustomerDetails data={data} />,
    documents: <DealerDocuments data={data} />,
    activity: <DealerActivity data={data} />,
    performance: <DealerPerformance data={data} />,
  };
  return (
    <DealerContext.Provider value={data}>
      {CustomerTabs[value as CustomerTabTypes] as React.JSX.Element}
    </DealerContext.Provider>
  );
}
