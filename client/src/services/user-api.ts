import { handleFetch } from '../utils/handleFetch';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export async function apiGetUserById(
  userId: string
): Promise<{ data: User | undefined; error: string | undefined }> {
  const { data, error } = await handleFetch<User>(() =>
    fetch(`http://localhost:3000/api/user/${userId}`)
  );

  return { data, error };
}

export async function apiCreateUser(
  firstName: string,
  lastName: string,
  email: string
): Promise<{
  data: { user: User; userCreated: boolean } | undefined;
  error: string | undefined;
}> {
  const { data, error } = await handleFetch<{
    user: User;
    userCreated: boolean;
  }>(() =>
    fetch('http://localhost:3000/api/user/', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email }),
    })
  );

  return { data, error };
}
