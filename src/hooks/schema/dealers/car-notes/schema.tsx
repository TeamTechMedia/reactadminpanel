import * as yup from "yup";

const defaultReqText = "This field is required.";

function useFormSchema() {
  const schema = yup.object().shape({
    carNotes: yup
      .array()
      .of(
        yup.object().shape({
          model: yup.string().required(defaultReqText),
        }),
      )
      .min(1, "At least one model required."),
  });

  return schema;
}

export default useFormSchema;
