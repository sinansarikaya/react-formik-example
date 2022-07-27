import { useFormik } from "formik";

function Validation() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>UseFormik Sign Up</h1>
      <form onSubmit={handleSubmit}>
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

export default Validation;
