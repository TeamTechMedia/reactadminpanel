import * as yup from "yup";

export const useFormSchema = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    contactNumber: yup.string().required("Phone Number is required"),
    location: yup.string().required("Location is required"),
    email: yup.string().email().required("Email is required"),
  });

  return schema;
};
