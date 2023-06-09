import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { register } from "@/app/Redux/Reducers/authReducer";
import { getRegError, getRegMsg } from "@/app/Redux/Selectors/authSelector";
import cn from "classnames";

// Registration Component
export const Registration = ({ setIsActive, active }: propsType) => {
  const dispatch = useDispatch();

  // Local variables
  const initialValues: RegisterFormType = {
    username: "",
    phoneNumber: "",
    password: "",
    password2: "",
  };
  const RegError = useSelector(getRegError);
  const RegMsg = useSelector(getRegMsg);

  // Switch to login if registration is successful
  useEffect(() => {
    if (RegMsg.length > 0) {
      setIsActive(!active);
    }
    // eslint-disable-next-line
  }, [RegMsg, setIsActive]);

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(
            register(
              values.username,
              values.phoneNumber,
              values.password,
              values.password2
            ) as any
          );
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .min(3, "Provided username is too short!")
            .max(50, "Provided username is too long!")
            .required("Username is required"),
          phoneNumber: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
            )
            .required("Phone number is required"),
          password: Yup.string()
            .required("Password is required")
            .min(4, "Provided password is too short!")
            .max(20, "Provided password is too long!"),
          password2: Yup.string()
            .when("password", {
              is: (val: string) => !!(val && val.length > 0),
              then: () =>
                Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same!"
                ),
            })
            .required("Repeating password is required"),
        })}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <h2 className="title">Sign up</h2>

            <div
              className={cn("input-field", {
                error: errors.username && touched.username,
              })}
            >
              <i className="fa fa-user"></i>
              <Field name="username" placeholder="Username" />
            </div>
            <ErrorMessage
              name="username"
              render={(error) => <div className="error">{error}</div>}
            />

            <div
              className={cn("input-field", {
                error: errors.phoneNumber && touched.phoneNumber,
              })}
            >
              <i className="fa fa-phone "></i>
              <Field name="phoneNumber" placeholder="Phone number" />
            </div>
            <ErrorMessage
              name="phoneNumber"
              render={(error) => <div className="error">{error}</div>}
            />

            <div
              className={cn("input-field", {
                error: errors.password && touched.password,
              })}
            >
              <i className="fa fa-lock"></i>
              <Field name="password" type="password" placeholder="Password" />
            </div>
            <ErrorMessage
              name="password"
              render={(error) => <div className="error">{error}</div>}
            />

            <div
              className={cn("input-field", {
                error: errors.password2 && touched.password2,
              })}
            >
              <i className="fa fa-lock"></i>
              <Field
                name="password2"
                type="password"
                placeholder="Repeat your password"
              />
            </div>
            <ErrorMessage
              name="password2"
              render={(error) => <div className="error">{error}</div>}
            />

            <button type="submit" className="btn solid">
              Register
            </button>

            {RegError ? <div className="error">RegError</div> : null}

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
interface RegisterFormType {
  username: string;
  phoneNumber: string;
  password: string;
  password2: string;
}
type propsType = {
  setIsActive: (isActive: boolean) => void;
  active: boolean;
};
