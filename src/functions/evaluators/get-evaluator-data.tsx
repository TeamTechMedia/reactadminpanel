import { EvaluatorViewResponse } from "@/services/evaluators/view/types";
import { capitaliseFirstLetter } from "@/utils/capitalise-firstletter";
import { formatDate } from "@/utils/format-date";

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
        value: capitaliseFirstLetter(data.location),
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
        value: formatDate(data.createdAt),
      },
      {
        label: "Cars Evaluated",
        value: data.evaluatedCarId.length
          ? data.evaluatedCarId
          : "No Cars Evaluated",
      },
    ]
  );
};
