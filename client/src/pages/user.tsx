import { useEffect, useState } from 'react';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export default function User() {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const res = await fetch('http://localhost:3000/api/user/users');
        const data: { users: IUser[] } = await res.json();

        if (!res.ok) {
          setError('Something went wrong fetching the users.');
          console.error('Something went wrong fetching the users.');
        }

        setUsers(data.users);
      } catch (err) {
        if (typeof err === 'string') {
          setError(err);
        } else {
          console.error(err);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>We are loading.</div>;
  }

  const userList = users ? (
    <ul>
      {users.map(({ email, firstName, lastName }) => (
        <li key={email}>
          {firstName} {lastName}
        </li>
      ))}
    </ul>
  ) : (
    'No users to display.'
  );

  return (
    <div>
      {error && <div>{error}</div>}
      <div>{userList}</div>
    </div>
  );
}
