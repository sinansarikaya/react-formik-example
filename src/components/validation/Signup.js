import { useFormik } from "formik";
import validationSchema from "./Validation";

function Signup() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
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
            onBlur={handleBlur}
            placeholder="email"
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div>
          <label>Username</label>
          <input
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Username"
            value={values.username}
          />
          {errors.username && touched.username && (
            <div className="error">{errors.username}</div>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password"
            value={values.password}
            type="password"
          />
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}
        </div>
        <div>
          <label>Password Confirm</label>
          <input
            name="passwordConfirm"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="passwordConfirm"
            value={values.passwordConfirm}
            type="password"
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className="error">{errors.passwordConfirm}</div>
          )}
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
