'use client';
import { Contact } from '@/types/Contact';
import { useState, type FC, ChangeEvent } from 'react';
import Input from './Input';
import ContactEntry from './ContactEntry';

type Props = {
  contacts: Contact[];
};

const ContactList: FC<Props> = ({ contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResults = contacts.filter((contact) => {
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

  return (
    <div className="w-1/2 h-1/2 gap-8  py-14 bg-slate-800 text-white rounded-3xl flex flex-col items-center justify-start overflow-y-scroll">
      <div className=" flex flex-col  items-center justify-center gap-2">
        <h3>Contacts</h3>
        <p className="font-medium">{filteredContacts.length} contacts found.</p>

        <Input
          type="text"
          label="Search"
          name={'search'}
          className="bg-neutral-200"
          placeholder={'Enter a name or a phone number.'}
          onChange={onChangeHandler}
        />
      </div>
      <div className="flex flex-col gap-4 p-7  rounded-lg w-1/2">
        {filteredContacts?.map((contact) => {
          return (
            <ContactEntry key={contact.id} name={contact.name}>
              {contact.phone}
            </ContactEntry>
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
