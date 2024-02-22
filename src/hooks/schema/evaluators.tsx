import * as yup from "yup";

export const useFormSchema = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Name is required"),
    contactNo: yup
      .string()
      .required("Phone Number is required")
      .max(10, "Phone Number should be 10 digits")
      .min(10, "Phone Number should be 10 digits"),
    location: yup.string().required("Location is required"),
    email: yup
      .string()
      .email("Email must be valid")
      .required("Email is required"),
  });

  return schema;
};
