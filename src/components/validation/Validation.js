import { object, string, ref } from "yup";

let Validation = object({
  email: string().email().required(),
  username: string().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .oneOf([ref("password")])
    .required(),
});

export default Validation;
