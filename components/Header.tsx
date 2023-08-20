import Link from 'next/link';
import HeaderLocale from '@/locales/HeaderLocale.json';

const Header = () => {
  const { textLogo, navItems } = HeaderLocale;
  return (
    <nav className="bg-slate-800 text-white w-full px-7 py-3 flex items-center justify-between">
      <Link href={'/'} className="text-2xl font-bold uppercase tracking-wide">
        {textLogo}
      </Link>

      <ul className="flex  gap-8">
        {navItems.map((item, i) => {
          return (
            <li key={i}>
              <Link className="nav_item" href={item.href}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
