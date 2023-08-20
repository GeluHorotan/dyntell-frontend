import type { FC } from 'react';
import { ContactsProvider } from './providers/ContactsProvider';

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return <ContactsProvider>{children}</ContactsProvider>;
};

export default Providers;
