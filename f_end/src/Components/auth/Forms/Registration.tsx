import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../Redux/Reducers/authReducer';
import { getRegError, getRegMsg } from '../../../Redux/Selectors/authSelector';
import { useEffect } from 'react';



// Registration Component
export const Registration = ({ isActive, setIsActive }: propsType) => {

    const dispatch = useDispatch()

    // Local variables
    const initialValues: RegisterFormType = { username: '', password: '', password2: '' };
    const RegError = useSelector(getRegError)
    const RegMsg = useSelector(getRegMsg)

    // Switch to login if registration is successful
    useEffect(() => {
        if (RegMsg.length > 0) {
            setIsActive(!isActive)
        }
    }, [RegMsg]);


    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    dispatch(register(values.username, values.password, values.password2))
                    actions.resetForm()
                    actions.setSubmitting(false)
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(3, 'Provided username is too short!')
                        .max(50, 'Provided username is too long!')
                        .required('Required'),
                    password: Yup.string()
                        .required('Password is required')
                        .min(4, 'Provided password is too short!')
                        .max(20, 'Provided password is too long!'),
                    password2: Yup.string()
                        .when("password", {
                            //  @ts-ignore
                            is: val => (val && val.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                "Both password need to be the same!"
                            )
                        })
                        .required('Repeating password is required'),
                })}
            >
                {({ errors, touched }) => (
                    < Form className="signup-form">
                        <h2 className="title">Sign up</h2>

                        <div className={errors.username && touched.username ? "input-field error" : "input-field"}>
                            <i className="fa fa-user"></i>
                            <Field name="username" placeholder="Username" />

                        </div>
                        <ErrorMessage name="username" render={error => <div className="error">{error}</div>} />

                        <div className={errors.password && touched.password ? "input-field error" : "input-field"}>
                            <i className="fa fa-lock"></i>
                            <Field name="password" type="password" placeholder="Password" />
                        </div>
                        <ErrorMessage name="password" render={error => <div className="error">{error}</div>} />

                        <div className={errors.password2 && touched.password2 ? "input-field error" : "input-field"}>
                            <i className="fa fa-lock"></i>
                            <Field name="password2" type="password" placeholder="Repeat your password" />
                        </div>
                        <ErrorMessage name="password2" render={error => <div className="error">{error}</div>} />

                        <button type="submit" className="btn solid" >Register</button>

                        {RegError ? <div className="error">{RegError}</div> : null}

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
        </div >
    )
}

// Types
interface RegisterFormType {
    username: string,
    password: string,
    password2: string,
}
type propsType = {
    isActive: boolean,
    setIsActive: (isActive: boolean) => void,
}