
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = () => {
  const initialValues = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required')
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
          <label>Title:</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" />
        </div>
        <div>
          <label>Author:</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" />
        </div>
        <div>
          <label>ISBN:</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" />
        </div>
        <div>
          <label>Publication Date:</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
