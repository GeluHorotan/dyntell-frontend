import { useContext } from 'react';

import { ContactsContext } from '../providers/ContactsProvider';

export const useContacts = () => {
  return useContext(ContactsContext);
};
