import React from "react";
import "./SimpleForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  contactNumber: "",
  email: "",
  message: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("values", values);
  console.log("onSubmitProps", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  contactNumber: Yup.number()
    .required("Required")
    .typeError("Please insert number only")
    .integer("Please insert whole number only"),
  email: Yup.string().required("Required").email("Invalid email format"),
  message: Yup.string().required("Required"),
});

function SimpleForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("formik", formik);
        return (
          <Form className="simple-form">
            <label htmlFor="name">
              Name <ErrorMessage name="name" component="div" />
            </label>
            <Field type="text" id="name" name="name" />

            <label htmlFor="contactNumber">
              Contact Number{" "}
              <ErrorMessage name="contactNumber" component="div" />
            </label>
            <Field type="text" id="contact-number" name="contactNumber" />

            <label htmlFor="email">
              Email <ErrorMessage name="email" component="div" />
            </label>
            <Field type="email" id="email" name="email" />

            <label htmlFor="message">
              Message <ErrorMessage name="message" component="div" />
            </label>
            <Field as="textarea" id="message" name="message" />

            <button
              type="submit"
              className="form-button"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Contact Me
            </button>
            {/* <Button
              type="submit"
              buttonClass="button primarybtn"
              onClick={onSubmit(formik.values, formik)}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Contact Me
            </Button> */}
          </Form>
        );
      }}
    </Formik>
  );
}

export default SimpleForm;
