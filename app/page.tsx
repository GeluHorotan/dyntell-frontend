import ContactList from '@/components/ContactList';

export default function Home() {
  return (
    <main className=" w-full h-[90vh] bg-slate-800 px-7 py-14 flex items-center justify-center flex-col">
      <ContactList />
    </main>
  );
}
