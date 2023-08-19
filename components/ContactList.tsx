'use client';
import { Contact } from '@/types/Contact';
import { useState, type FC, ChangeEvent } from 'react';

type Props = {
  contacts: Contact[];
};

const ContactList: FC<Props> = ({ contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResults = contacts.filter((contact) => {
      // Creating the name variable that holds the name of contact in lowercase.
      const name = contact.name.toLowerCase();

      // Creating the input text variable that holds the input received from user, in lowercase.
      const inputText = e.target.value.toLowerCase();

      // If the name contains the input text value, we return that object.
      return name.includes(inputText);
    });

    // Setting the state with filtered results.
    setFilteredContacts(filteredResults);
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      {filteredContacts?.map((contact) => {
        return <p key={contact.id}>{contact.name}</p>;
      })}
    </div>
  );
};

export default ContactList;
