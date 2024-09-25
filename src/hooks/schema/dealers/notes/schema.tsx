import * as yup from "yup";

const defaultReqText = "This field is required.";

function useFormSchema() {
  const schema = yup.object().shape({
    note: yup.string().required(defaultReqText),
  });

  return schema;
}

export default useFormSchema;
