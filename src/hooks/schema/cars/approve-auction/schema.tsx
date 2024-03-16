import * as yup from "yup";

function useFormSchema() {
  const schema = yup.object().shape({
    startBidTime: yup.date().required("Starting Time is required"),
    endBidTime: yup
      .date()
      .required("Ending Time is required")
      .min(yup.ref("startBidTime"), "End Time must be after Start Time"),
    realValue: yup
      .number()
      .required("Fair Market Value is required")
      .nonNullable()
      .typeError("Fair Market Value is required"),
  });

  return schema;
}

export default useFormSchema;
