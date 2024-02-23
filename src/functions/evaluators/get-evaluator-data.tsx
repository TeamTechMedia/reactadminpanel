import { EvaluatorViewResponse } from "@/services/evaluators/view/types";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";

export const getEvaluatorData = (data: EvaluatorViewResponse | undefined) => {
  return (
    data && [
      {
        label: "Name",
        value: capitaliseFirstLetter(data.fullname),
      },
      {
        label: "Status",
        value: data.isBlocked ? "Blocked" : "Active",
      },
      {
        label: "Phone Number",
        value: data.contactNo,
      },
      {
        label: "Email",
        value: data.email,
      },
      {
        label: "Location",
        value: data.location,
      },
      {
        label: "Role",
        value: data.role,
      },
      {
        label: "User Id",
        value: data.userId,
      },
      {
        label: "Password",
        value: data.password,
      },
      {
        label: "Created at",
        value: data.createdAt,
      },
    ]
  );
};
