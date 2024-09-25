import * as yup from "yup";

const defaultReqText = "This field is required.";

function useFormSchema() {
  const schema = yup.object().shape({
    businessName: yup.string().required(defaultReqText),
    businessAddress: yup.string().required(defaultReqText),
    fullname: yup.string().required(defaultReqText),
    pincode: yup.string().required(defaultReqText),
  });

  return schema;
}

export default useFormSchema;
