export const getContacts = async () => {
  const result = await fetch(
    (process.env.NEXT_PUBLIC_API_URL as string) + 'api/contact',
    { next: { tags: ['contacts'] }, cache: 'no-store' }
  );
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }

  return result.json();
};
