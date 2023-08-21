import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-slate-800 text-white w-full px-7 h-[10vh] flex items-center justify-between">
      <Link href={'/'} className="text-2xl font-bold uppercase tracking-wide">
        D.
      </Link>

      <ul className="flex  gap-8">
        <li>
          <Link className="nav_item" href={'/about'}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="nav_item" href={'/contact'}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
