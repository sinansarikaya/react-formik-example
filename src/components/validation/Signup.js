import { useFormik } from "formik";
import validationSchema from "./Validation";

function Signup() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div>
      <h1>Validation Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="email"
            value={values.email}
          />
        </div>
        <br />
        <div>
          <label>Username</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            value={values.username}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={values.password}
            type="password"
          />
        </div>
        <br />
        <div>
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            onChange={handleChange}
            placeholder="passwordConfirm"
            value={values.passwordConfirm}
            type="password"
          />
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Signup;
