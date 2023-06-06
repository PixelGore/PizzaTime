import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { login } from "@/app/Redux/Reducers/authReducer";
import {
  getLogError,
  getAuthMe,
  getisFetchingLogin,
} from "@/app/Redux/Selectors/authSelector";

// Login Component
export const Login = () => {
  const dispatch = useDispatch();

  // Local variables
  const initialValues: LoginFormType = { username: "", password: "" };
  const LogError = useSelector(getLogError);
  const Me = useSelector(getAuthMe);

  // If logged redirect to home
  if (Me.length > 0) {
    redirect("/home");
  }

  return (
    <div className="form-container">
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
                <FacebookIcon className="fa fa-facebook"></FacebookIcon>
              </a>
              <a href="/" className="social-icon">
                <TwitterIcon className="fa fa-twitter"></TwitterIcon>
              </a>
              <a href="/" className="social-icon">
                <GoogleIcon className="fa fa-google"></GoogleIcon>
              </a>
              <a href="/" className="social-icon">
                <LinkedInIcon className="fa fa-linkedin"></LinkedInIcon>
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
