import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const PhoneBook = ({ addNewContact }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={AddSchema}
        onSubmit={values => {
          addNewContact(values);
        }}
      >
        <Form>
          <label>
            <p>Name</p>
            <Field name="name" type="text" />
            <ErrorMessage name="name"></ErrorMessage>
          </label>
          <label>
            <p>Number</p>
            <Field name="number" type="tel" />
            <ErrorMessage name="number"></ErrorMessage>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
