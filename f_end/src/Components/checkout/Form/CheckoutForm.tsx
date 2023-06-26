import React, { createRef } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import "./CheckoutForm.scss";
import PreLoader from "../../common/preloader/Preloader";
import { CheckoutType, ProductsType } from "../../../types/types";
import { SubmitCart } from "../../../Redux/Reducers/cartReducer";

// Importing PaypalBtn
//  @ts-ignore
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const CheckoutForm: React.FC<propsType> = ({
  items,
  total,
  isFetching,
}) => {
  const dispatch = useDispatch();
  // Local Values
  const initialValues: CheckoutType = {
    form: { name: "", phone: "" },
    address: "",
    items,
    total,
  };
  const submitBtn = createRef<HTMLButtonElement>();

  // Handling Paypal order
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  };
  const onApprove = (data: any, actions: any) => {
    return (
      actions.order
        .capture()
        // Submitting form after payment
        .then(submitBtn.current?.click())
    );
  };
  // End.

  return (
    <div className="checkout__form">
      {isFetching ? <PreLoader /> : ""}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(
            SubmitCart(
              values.form,
              values.address,
              values.items,
              values.total
            ) as any
          );
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          form: Yup.object({
            name: Yup.string()
              .min(3, "Provided username is too short!")
              .max(50, "Provided username is too long!")
              .required("The username is required"),
            phone: Yup.string()
              .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid"
              )
              .required("Phone number is required"),
          }),
          address: Yup.string()
            .min(5, "Address is not valid")
            .required("Address is required"),
        })}
      >
        {(params) => (
          <Form>
            <div className="form-group">
              <Field
                className="form-control"
                name="form.name"
                placeholder="First Name"
              />
              <ErrorMessage
                name="form.name"
                render={(error) => <div className="error">{error}</div>}
              />
              <Field
                className="form-control"
                name="form.phone"
                placeholder="Phone Number"
              />
              <ErrorMessage
                name="form.phone"
                render={(error) => <div className="error">{error}</div>}
              />
            </div>

            <div className="form-group">
              <h3 className="text">
                We deliver only in Melbourne and it's surroundings !
              </h3>
              <Field
                className="form-control"
                name="address"
                placeholder="Address"
              />
              <ErrorMessage
                name="address"
                render={(error) => <div className="error">{error}</div>}
              />
            </div>

            <div className="submit">
              <button ref={submitBtn} type="submit" className="submit-btn">
                Submit
              </button>
              <PayPalButton
                createOrder={(data: any, actions: any) =>
                  createOrder(data, actions)
                }
                onApprove={(data: any, actions: any) =>
                  onApprove(data, actions)
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
type propsType = {
  items: ProductsType[];
  total: number;
  isFetching: boolean;
};
