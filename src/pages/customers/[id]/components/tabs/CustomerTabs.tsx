import React from "react";
import CustomerDetails from "./CustomerDetails";
import CustomerDocuments from "./CustomerDocuments";
import { CustomerTabTypes } from "../../../../../types/customers/tabType";

interface CustomerTabsProps {
  value: string;
}

const CustomerTabs = (props: CustomerTabsProps) => {
  const { value } = props;
  const CustomerTabs = {
    customer_details: <CustomerDetails />,
    documents: <CustomerDocuments />,
  };

  return CustomerTabs[value as CustomerTabTypes] as React.JSX.Element;
};

export default CustomerTabs;
