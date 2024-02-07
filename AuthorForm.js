
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = () => {
  const initialValues = {
    name: '',
    birthDate: '',
    biography: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth date is required'),
    biography: Yup.string().required('Biography is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Birth Date:</label>
          <Field type="date" name="birthDate" />
          <ErrorMessage name="birthDate" />
        </div>
        <div>
          <label>Biography:</label>
          <Field as="textarea" name="biography" />
          <ErrorMessage name="biography" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
