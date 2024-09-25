import * as yup from "yup";

const defaultReqText = "This field is required.";

function useFormSchema() {
  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    name: yup.string().required(defaultReqText),
  });

  return schema;
}

export default useFormSchema;
