import { object, string, ref } from "yup";

let Validation = object({
  email: string()
    .email("Is not an email")
    .required("Email is a required field"),
  username: string().required("Username is a required field"),
  password: string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is a required field"),
  passwordConfirm: string()
    .oneOf([ref("password")], "Passwords must be same")
    .required("Password Confirm is a required field"),
});

export default Validation;
