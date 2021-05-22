import {
    Formik,
    Form,
    Field,
} from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../../Redux/Reducers/authReducer';


interface LoginFormType {
    username: string,
    password: string,
}

export const Login = () => {
    const initialValues: LoginFormType = { username: '', password: '' };
    const dispatch = useDispatch()

    const submit = (values: LoginFormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {

        alert(JSON.stringify(values))
        dispatch(login(values.username, values.password))
        setSubmitting(false)
    }

    return (
        <div className="form-container">
            <Formik
                initialValues={initialValues}

                onSubmit={submit}
            >
                <Form className="signin-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fa fa-user"></i>
                        <Field name="username" placeholder="Username" />
                    </div>
                    <div className="input-field">
                        <i className="fa fa-lock"></i>
                        <Field name="password" type="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn solid" >Login</button>
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