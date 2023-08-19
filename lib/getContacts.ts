export const getContacts = async () => {
  const result = await fetch((process.env.API_URL as string) + 'api/contact');
  if (!result.ok) {
    throw new Error('Failed to fetch data');
  }

  return result.json();
};
