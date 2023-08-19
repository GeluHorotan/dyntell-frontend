import type { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

type Props = {
  children: React.ReactNode;
  name: string;
};

const ContactEntry: FC<Props> = ({ children, name }) => {
  return (
    <div className="w-full  ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between border-b border-slate-600  px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>{name}</span>
              <IoIosArrowUp
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ContactEntry;
