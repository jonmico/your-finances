import { useState } from 'react';
import { apiCreateUser } from '../services/user-api';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);

  const [userCreated, setUserCreated] = useState(false);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsLoading(true);
    const { data, error } = await apiCreateUser(firstName, lastName, email);
    setIsLoading(false);

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setUser(data.user);
      setUserCreated(data.userCreated);
    }
  }

  if (isLoading) {
    return <div>Creating account...</div>;
  }

  return (
    <div>
      <h1>This is the Register Page</h1>
      {error && <div>{error}</div>}
      {userCreated && <div>User Created!: {user?.email}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id={'firstName'}
            name={'firstName'}
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id={'lastName'}
            name={'lastName'}
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id={'email'}
            name={'email'}
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
        </div>
        <button>Create account</button>
      </form>
    </div>
  );
}
