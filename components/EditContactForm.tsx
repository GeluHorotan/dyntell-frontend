import { type FC } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Button from './Button';

import { useContacts } from '@/context/hooks/useContacts';

type Props = {
  setEditMode: (prevState: boolean) => void;
  editMode: boolean;
  contactID: string;
};

const EditSchema = Yup.object().shape({
  name: Yup.string()

    .matches(/^[A-Za-z\s]+$/, 'The name must contain only letters!')
    .min(3, 'The name must  have more than 3 characters!')
    .max(20, 'The name must NOT have more than 20 characters!'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'The phone number must contain only numbers.')
    .min(10, 'The phone number must  have more than 10 digits!')
    .max(15, 'The phone number must NOT have more than 15 digits!'),
  email: Yup.string()
    .email('The email must be a valid email!')
    .min(3, 'The email must  have more than 3 characters!')
    .max(30, `The email must NOT  have more than 30 characters!`),
});

const EditContactForm: FC<Props> = ({ editMode, contactID, setEditMode }) => {
  const { editContact } = useContacts();
  return (
    <Formik
      validateOnBlur
      validateOnChange
      validationSchema={EditSchema}
      initialValues={{
        name: '',
        phone: '',
        email: '',
      }}
      onSubmit={async ({ name, phone, email }) => {
        await editContact({ contactID, name, phone, email });
        setEditMode(!editMode);
      }}
    >
      {({
        values: { name, phone, email },
        errors,
        handleBlur,
        handleChange,
      }) => (
        <Form className={'flex   flex-col justify-center gap-2  '}>
          <Field
            label="N:"
            placeholder={'Enter the name.'}
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={!editMode ? '' : name}
            error={errors.name}
            as={Input}
            row
            className="bg-slate-800  autofill:shadow-fill-slate-800 autofill:text-fill-slate-300 w-full text-slate-300 border-b border-t-0 border-l-0 border-r-0 rounded-none p-0 text-sm border-slate-600 focus:border-slate-600 "
          />
          <Field
            label="P:"
            placeholder={'Enter the phone number.'}
            id="phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={!editMode ? '' : phone}
            error={errors.phone}
            as={Input}
            row
            className="bg-slate-800  autofill:shadow-fill-slate-800 autofill:text-fill-slate-300 w-full text-slate-300 border-b border-t-0 border-l-0 border-r-0 rounded-none p-0 text-sm border-slate-600 focus:border-slate-600 "
          />
          <Field
            label="E:"
            id="email"
            placeholder={'Enter the email.'}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={!editMode ? '' : email}
            error={errors.email}
            className="bg-slate-800 border-slate-600 focus:border-slate-600  autofill:shadow-fill-slate-800 autofill:text-fill-slate-300  w-full text-slate-300 border-b border-t-0 border-l-0 border-r-0 rounded-none p-0 text-sm  "
            as={Input}
            row
          />

          <Button
            type="submit"
            className="bg-slate-700 rounded-lg py-1 my-2 self-end px-7 "
          >
            SAVE
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;
