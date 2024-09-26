import * as yup from "yup";

const defaultReqText = "This field is required.";

function useFormSchema() {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required(defaultReqText)
      .typeError(defaultReqText)
      .integer()
      .positive("Must be greater than 0"),
  });

  return schema;
}

export default useFormSchema;
