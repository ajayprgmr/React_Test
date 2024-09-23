import React from 'react';
import './App.css';
import { Formik, Form } from 'formik';

const App = () => {
  return (
    <main className="form-center">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          console.log(values); // Handle form submission here
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <div className="formInput">
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={values.password}
              />
            </div>
            <div className="formInput">
              <input type="submit" name="submit" value="Submit" />
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default App;
