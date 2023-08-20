export interface IContact {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IEditContact {
  name?: string;
  phone?: string;
  email?: string;
  contactID: string;
}
