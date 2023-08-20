'use client';
import { Contact } from '@/types/Contact';
import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  contacts: Contact[] | null;
  isLoading: boolean;
  getContacts: () => Promise<Error> | Contact[];
};

export const ContactsContext = createContext<State>({} as State);

export const ContactsProvider = ({ children }: Props) => {
  const [contacts, setContacts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <ContactsContext.Provider value={{ contacts, isLoading, getContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};
