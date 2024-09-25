import DealerOne from "../../../public/assets/dealers/Dealers-Onboard.svg";
import DealerTwo from "../../../public/assets/dealers/Verified-Dealers.svg";
import DealerThree from "../../../public/assets/dealers/Unverified-Dealers.svg";
import DealerFour from "../../../public/assets/dealers/Suspended-Dealers.svg";

export const getDealerMetrics = ({
  totalUsers,
  unverifiedUsers,
  verifiedUsers,
  suspendedUsers,
}: {
  totalUsers: number;
  unverifiedUsers: number;
  verifiedUsers: number;
  suspendedUsers: number;
}) => {
  return [
    {
      label: "Dealers Onboarded",
      value: totalUsers ?? 0,
      icon: DealerOne,
    },
    {
      label: "Verified Dealers",
      value: verifiedUsers ?? 0,
      icon: DealerTwo,
    },
    {
      label: "Unverified Dealers",
      value: unverifiedUsers ?? 0,
      icon: DealerThree,
    },
    {
      label: "Suspended Dealers",
      value: suspendedUsers ?? 0,
      icon: DealerFour,
    },
  ];
};
