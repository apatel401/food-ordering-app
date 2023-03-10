import React from "react";
import { Formik } from "formik";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useOutletContext();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        !values.email
          ? (errors.email = "Required")
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ? (errors.email = "Invalid email address")
          : values.password.length < 6
          ? (errors.password = "Password must be 6 or more charecters")
          : null;
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
setLoggedIn(true)
        navigate('/');
       localStorage.setItem("username", JSON.stringify(values.email))
       localStorage.setItem("password",  JSON.stringify(values.password))
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="formik-form flex flex-col w-full my-0 mx-auto items-center h-[70vh] justify-center bg-phew text-white">
          <div className="form-label mb-4">
            <label className="text-lg font-semibold pr-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-72 flex h-9 rounded-br-2xl rounded-tl-2xl border-5 border-phew border-solid pl-3"
            />
            {errors.email && touched.email && errors.email}
          </div>
          <div className="form-label">
            <label className="text-lg font-semibold pr-2">password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="w-72 flex h-9 rounded-br-2xl rounded-tl-2xl border-5 border-phew border-solid pl-3"
            />
            {errors.password && touched.password && errors.password}
          </div>
          <button type="submit" className="bg-pinky text-lg font-semibold border-0 rounded-2xl py-2 px-6 mt-6" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
