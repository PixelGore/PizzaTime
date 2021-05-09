import "./CheckoutForm.scss"
import {
    Formik,
    Form,
    Field,
} from 'formik';
import { ProductsType } from "../../../types/types";

interface MyFormValues {
    firstName: string;
    phone: string;
    adress: string;
    items: ProductsType[]
}

export const CheckoutForm: React.FC<{items:ProductsType[]}> = ({items}) => {
    const initialValues: MyFormValues = { firstName: '', phone: '' , adress: '', items};
    return (
        <div className="checkout__form">
            <Formik
                initialValues={initialValues}

                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <div className="form-group">
                        <Field className="form-control" name="firstName" placeholder="First Name" />
                        <Field className="form-control" name="phone" placeholder="Phone Number" />
                    </div>


                    <div className="form-group">
                        <h3 className="text">We deliver only in Melbourne and it's surroundings !</h3>
                        <Field className="form-control" name="adress" placeholder="Adress" />
                    </div>

                    <div className="submit">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>

                </Form>
            </Formik>
        </div>
    );
};