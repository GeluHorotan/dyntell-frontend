import ContactList from '@/components/ContactList';

export default function Home() {
  return (
    <main className=" w-full h-screen bg-slate-800 px-7 flex items-center justify-center flex-col">
      <ContactList />
    </main>
  );
}
