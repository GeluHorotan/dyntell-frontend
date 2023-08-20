'use client';
import { IContact, IEditContact, IError } from '@/types/Contacts';
import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  contacts: IContact[] | null;
  isLoading: boolean;
  errors: IError[] | [];
  getContacts: () => Promise<Error | IContact[]>;
  editContact: ({
    contactID,
    name,
    email,
    phone,
  }: IEditContact) => Promise<Error | IContact[]>;
};

export const ContactsContext = createContext<State>({} as State);

export const ContactsProvider = ({ children }: Props) => {
  const [contacts, setContacts] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const result = await fetch(
        (process.env.NEXT_PUBLIC_API_URL as string) + 'api/contact'
      );
      const data = await result.json();
      setContacts(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  const editContact = async ({
    contactID,
    name,
    email,
    phone,
  }: IEditContact) => {
    try {
      const data = { name, email, phone };
      const result = await fetch(
        (process.env.NEXT_PUBLIC_API_URL as string) +
          `api/contact/${contactID}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const res = await result.json();

      if (res.errors) {
        const err = res.errors.map((err2: IError) => err2);
        setErrors(() => err);

        // clearErrors();
        throw new Error('Something went wrong.');
      }

      setContacts(res);
      return res;
    } catch (error: any) {
      const err = error.errors.map((err2: IError) => err2);
      setErrors(err);
      console.log(errors, 'CATCH ERRORS STATE');
      // clearErrors();
      return error;
    }
  };

  const clearErrors = () => {
    console.log('BEGIN TO CLEAR IN 5 SECONDS');
    setTimeout(() => {
      setErrors([]);
    }, 5000);
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, isLoading, errors, getContacts, editContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
