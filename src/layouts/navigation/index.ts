import { VerticalNavItemsType } from "../types";

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: "Dashboard",
      path: "/home",
      action: "manage",
      subject: "home",
      icon: "tabler:dashboard",
    },
    {
      title: "Customers",
      path: "/customers",
      action: "manage",
      subject: "customers",
      icon: "tabler:users",
    },
    {
      title: "Cars",
      path: "/cars",
      action: "manage",
      subject: "cars",
      icon: "tabler:car",
    },
    {
      title: "Auctions",
      path: "/auctions",
      action: "manage",
      subject: "auctions",
      icon: "tabler:gavel",
    },
    {
      title: "Results",
      path: "/results",
      action: "manage",
      subject: "results",
      icon: "tabler:trophy",
    },
    {
      title: "OTB",
      path: "/otb",
      action: "manage",
      subject: "otb",
      icon: "tabler:credit-card-pay",
    },
    {
      title: "Evaluators",
      path: "/evaluators",
      action: "manage",
      subject: "evaluators",
      icon: "tabler:user-star",
    },
  ];
};

export default navigation;
