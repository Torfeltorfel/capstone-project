export default async function saveInDB(
  session: unknown,
  url: string
): Promise<void> {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ session }),
  });
  if (response.status === 200) {
    console.log('Done!');
  } else {
    console.log('Error - data not uploaded!');
  }
}
