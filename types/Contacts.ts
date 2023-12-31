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
export interface ICreateContact {
  name: string;
  phone: string;
  email?: string;
}

export interface IError {
  field?: string;
  contactID?: string;
  message: string;
}
