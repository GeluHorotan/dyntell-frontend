import { useState, type FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { IoIosArrowUp } from 'react-icons/io';
import { AiFillEdit, AiFillDelete, AiFillSave } from 'react-icons/ai';
import ProfilePicture from './ProfilePicture';
import Button from './Button';
import { Contact } from '@/types/Contact';
import EditContactForm from './EditContactForm';

type Props = {
  contact: Contact;
};

const ContactEntry: FC<Props> = ({ contact }) => {
  const [editMode, setEditMode] = useState(false);

  const { name, phone, email } = contact;
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
            <Disclosure.Panel className=" pt-4 pb-2 text-sm flex flex-col gap-4  ">
              <div className=" w-full flex items-center justify-between">
                {editMode && (
                  <Button
                    type="button"
                    onClick={() => setEditMode((prevState) => !prevState)}
                  >
                    {' '}
                    <AiFillSave size={16} /> Save
                  </Button>
                )}

                <Button
                  type="button"
                  onClick={() => setEditMode((prevState) => !prevState)}
                >
                  {' '}
                  <AiFillEdit size={16} /> {!editMode ? 'Edit' : 'Close'}
                </Button>

                <Button type="button">
                  {' '}
                  <AiFillDelete size={16} /> Delete
                </Button>
              </div>
              <div className="text-sm  ">
                {!editMode && (
                  <div className="flex flex-col items-start gap-2">
                    <p className="flex items-center gap-2 ">
                      P:{' '}
                      <span className="tracking-wider ">{contact.phone}</span>
                    </p>
                    <p className="flex items-center gap-2 ">
                      E:{' '}
                      <span className="tracking-wider ">
                        {contact.email || 'Email not found.'}
                      </span>
                    </p>
                  </div>
                )}
                {editMode && (
                  <EditContactForm
                    currentPhone={phone}
                    currentEmail={email}
                    editMode={editMode}
                  />
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ContactEntry;
