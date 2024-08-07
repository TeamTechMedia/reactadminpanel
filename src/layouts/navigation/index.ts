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
      title: "Dealers",
      path: "/dealers",
      action: "manage",
      subject: "dealers",
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
      title: "Live",
      path: "/live",
      action: "manage",
      subject: "cars",
      icon: "tabler:rss",
    },
    {
      title: "Auctions",
      path: "/auctions",
      action: "manage",
      subject: "auctions",
      icon: "tabler:gavel",
    },
    {
      title: "OTB",
      path: "/otb",
      action: "manage",
      subject: "otb",
      icon: "tabler:credit-card-pay",
    },
    {
      title: "Results",
      path: "/results",
      action: "manage",
      subject: "results",
      icon: "tabler:trophy",
    },
    {
      title: "Evaluators",
      path: "/evaluators",
      action: "manage",
      subject: "evaluators",
      icon: "tabler:user-star",
    },
    {
      title: "Leads",
      path: "/leads",
      action: "manage",
      subject: "leads",
      icon: "tabler:users-group",
    },
  ];
};

export default navigation;
