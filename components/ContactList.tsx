'use client';
import { IContact } from '@/types/Contacts';
import { useState, type FC, ChangeEvent, useEffect } from 'react';
import Input from './Input';
import ContactEntry from './ContactEntry';
import { useContacts } from '@/context/hooks/useContacts';

const ContactList: FC = () => {
  const { contacts, isLoading } = useContacts();
  const [filteredContacts, setFilteredContacts] = useState<IContact[] | null>();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResults = contacts?.filter((contact) => {
      // Creating the name variable that holds the name of the contact in lowercase.
      const name = contact.name.toLowerCase();
      // Creating the phone variable that holds the phone number of the contact in lowercase.
      const phone = contact.phone.toLowerCase();

      // Creating the input text variable that holds the input received from user, in lowercase.
      const inputText = e.target.value.toLowerCase();

      // Returning the objects whose names or phone numbers includes the input text.
      return name.includes(inputText) || phone.includes(inputText);
    });

    // Setting the state with filtered results.
    setFilteredContacts(filteredResults);
  };

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  if (isLoading) return <h1>Loading...</h1>;

  if (!isLoading)
    return (
      <div className="w-[70%] h-[70%] gap-8  py-14  text-white rounded-3xl flex flex-col items-center justify-start ">
        <div className=" flex flex-col  items-center justify-center gap-2">
          <h3>Contacts</h3>
          <p className="font-medium">
            {filteredContacts?.length} contacts found.
          </p>

          <Input
            type="text"
            label="Search"
            name={'search'}
            className="bg-neutral-200 border-none"
            placeholder={'Enter a name or a phone number.'}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex flex-col gap-4 p-7 h-full  rounded-lg w-1/2 overflow-y-scroll">
          {filteredContacts?.map((contact) => {
            return <ContactEntry key={contact.id} contact={contact} />;
          })}
        </div>
      </div>
    );
};

export default ContactList;
