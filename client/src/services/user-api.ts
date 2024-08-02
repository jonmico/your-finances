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
  email: string,
  password: string
): Promise<{
  data: { user: User; userCreated: boolean } | undefined;
  error: string | undefined;
}> {
  const { data, error } = await handleFetch<{
    user: User;
    userCreated: boolean;
  }>(() =>
    fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
  );

  return { data, error };
}

// TODO: Implement
export async function apiLogin(email: string, password: string) {}
