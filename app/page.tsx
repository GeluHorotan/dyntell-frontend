import ContactList from '@/components/ContactList';
import { getContacts } from '@/lib/getContacts';
import { Contact } from '@/types/Contact';

export default async function Home() {
  const contacts: Contact[] = await getContacts();

  return (
    <main className="bg-red-400 w-full h-screen flex items-center justify-center flex-col">
      <h1>Contacts</h1>
      <ContactList contacts={contacts} />
    </main>
  );
}
