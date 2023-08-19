import { revalidateTag } from 'next/cache';
export const editContact = async (
  contactID: string,
  data: { name: string; phone: string; email: string }
) => {
  const result = await fetch(
    (process.env.NEXT_PUBLIC_API_URL as string) + `api/contact/${contactID}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  revalidateTag('contacts');
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }

  return result.json();
};
