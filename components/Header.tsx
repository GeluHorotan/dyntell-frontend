import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-red-400 w-full px-7 py-3 flex items-center justify-between">
      <Link href={'/'} className="text-2xl font-bold uppercase tracking-wide">
        Dyntell
      </Link>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
