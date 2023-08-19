import type { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import ProfilePicture from './ProfilePicture';

type Props = {
  children: React.ReactNode;
  name: string;
};

const ContactEntry: FC<Props> = ({ children, name }) => {
  return (
    <div className="w-full text-slate-300 ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between border-b border-slate-600  px-4 py-2 text-left text-sm font-medium  items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <div className="flex gap-4 items-center justify-center">
                <ProfilePicture letter={name[0]} />
                <span>{name}</span>
              </div>
              <IoIosArrowUp
                size={16}
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-slate-300`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-16 pt-4 pb-2 text-sm flex flex-col  ">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ContactEntry;
