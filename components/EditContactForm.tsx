import { type FC } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';

type Props = {
  currentPhone: string;
  currentEmail: string | null;
  editMode: boolean;
};

const EditSchema = Yup.object().shape({
  phone: Yup.string()
    .min(3, 'Please enter more than 3 characters!')
    .max(20, `Please enter less than 10 characters!`),
  email: Yup.string()
    .email('Please enter a valid email!')
    .min(3, 'Please enter more than 3 characters!')
    .max(30, `Please enter less than 30 characters!`),
});

const EditContactForm: FC<Props> = ({
  currentPhone,
  currentEmail,
  editMode,
}) => {
  return (
    <Formik
      validateOnBlur
      validateOnChange
      validationSchema={EditSchema}
      initialValues={{
        phone: '',
        email: '',
      }}
      onSubmit={async ({ phone, email }) => {
        console.log(phone, email);
      }}
    >
      {({ values: { phone, email }, errors, handleBlur, handleChange }) => (
        <Form className={'flex   flex-col justify-center gap-2  '}>
          <Field
            label="P:"
            placeholder={'Enter the phone number.'}
            id="phone"
            name="phone"
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
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
            placeholder={currentEmail || 'Enter the email.'}
            name="email"
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type="text"
            value={!editMode ? '' : email}
            error={errors.email}
            className="bg-slate-800 border-slate-600 focus:border-slate-600  autofill:shadow-fill-slate-800 autofill:text-fill-slate-300  w-full text-slate-300 border-b border-t-0 border-l-0 border-r-0 rounded-none p-0 text-sm  "
            as={Input}
            row
          />

          {/* <Button
            type="submit"
            className=" mb-4 w-max rounded-lg border-2  border-accent  px-6 py-2 font-bold   uppercase transition-all duration-75 ease-in-out  disabled:!border-secondary_s_2 disabled:!text-secondary_s_2  dark:border-accent2 "
            rounded
            disabled={isButtonDisabled}
          >
            SEND MESSAGE
          </Button> */}
        </Form>
      )}
    </Formik>
  );
};

export default EditContactForm;
