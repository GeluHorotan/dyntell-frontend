import ContactList from '@/components/ContactList';
import { getContacts } from '@/lib/getContacts';
import { Contact } from '@/types/Contact';

export default async function Home() {
  const contacts: Contact[] = await getContacts();

  return (
    <main className=" w-full h-screen flex items-center justify-center flex-col">
      <ContactList contacts={contacts} />
    </main>
  );
}
