import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Reducers/authReducer';

interface RegisterFormType {
    username: string,
    password: string,
    password2: string,
}

export const Registration = () => {

    const initialValues: RegisterFormType = { username: '', password: '', password2: '' };
    const dispatch = useDispatch()

    const submit = (values: RegisterFormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {

        alert(JSON.stringify(values))
        dispatch(register(values.username, values.password, values.password2))
        setSubmitting(false)
    }
    return (
        <div className="form-container">

            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            >
                <Form className="signup-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <Field name="username" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <Field name="password" type="password" placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <Field name="password2" type="password" placeholder="Repeat your password" />
                    </div>
                    <button type="submit" className="btn solid" >Register</button>

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
            </Formik>

        </div>
    )
}