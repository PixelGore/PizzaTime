import React from "react";
import { Navigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/Reducers/authReducer";
import {
  getLogError,
  getAuthMe,
  getisFetchingLogin,
} from "../../../Redux/Selectors/authSelector";
import PreLoader from "../../common/preloader/Preloader";

// Login Component
export const Login = () => {
  const dispatch = useDispatch();

  // Local variables
  const initialValues: LoginFormType = { username: "", password: "" };
  const LogError = useSelector(getLogError);
  const Me = useSelector(getAuthMe);
  const isFetching = useSelector(getisFetchingLogin);

  // If logged redirect to home
  if (Me.length > 0) {
    return <Navigate to={"/home"} />;
  }

  return (
    <div className="form-container">
      {isFetching ? <PreLoader /> : ""}
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .required("Username is Required")
            .matches(/^(?!admin\b)/i, "Nice try !"),
          password: Yup.string().required("Password is Required"),
        })}
        onSubmit={(values, actions) => {
          dispatch(login(values.username, values.password) as any);
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="signin-form">
            <h2 className="title">Sign in</h2>
            <div
              className={
                errors.username && touched.username
                  ? "input-field error"
                  : "input-field"
              }
            >
              <i className="fa fa-user"></i>
              <Field name="username" placeholder="Username" />
            </div>
            <ErrorMessage
              name="username"
              render={(error) => <div className="error">{error}</div>}
            />

            <div
              className={
                errors.password && touched.password
                  ? "input-field error"
                  : "input-field"
              }
            >
              <i className="fa fa-lock"></i>
              <Field name="password" type="password" placeholder="Password" />
            </div>
            <ErrorMessage
              name="password"
              render={(error) => <div className="error">{error}</div>}
            />

            <button type="submit" className="btn solid">
              Login
            </button>

            {LogError ? <div className="error">LogError</div> : null}

            <p className="social-text">Or sign up with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fa fa-google"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
// Types
interface LoginFormType {
  username: string;
  password: string;
}
