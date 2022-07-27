import { Formik, Field, Form } from "formik";

function First() {
  return (
    <div>
      <h1>First Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Sinan",
          lastName: "Sarikaya",
          email: "sinan.sarykaya@gmail.com",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* Normal kullanim */}
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default First;
