import { useState } from 'react';
import { apiCreateUser } from '../services/user-api';
import styled from 'styled-components';

const StyledRegisterPage = styled.div`
  border: 1px solid var(--text-800);
  background-color: var(--background-900);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 480px;
`;

const StyledH1 = styled.h1`
  padding: 0 0.75rem 0.5rem 0.75rem;
  border-bottom: 1px solid var(--text-800);
  width: 100%;
  text-align: center;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.85rem;
`;

const Input = styled.input`
  background-color: var(--background-900);
  border-radius: 0.25rem;
  height: 1.85rem;
  border: 1px solid var(--text-700);
  color: var(--text);
  padding: 0 0.5rem;

  &:focus-visible {
    outline: 4px solid var(--primary-400);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent-600);
  color: var(--text);
  padding: 0.7rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: var(--accent-500);
  }
`;

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
    return <div>Attemping to create account...</div>;
  }

  return (
    <StyledRegisterPage>
      {error && <div>{error}</div>}
      {userCreated && <div>User Created!: {user?.email}</div>}
      <RegisterForm onSubmit={handleSubmit}>
        <StyledH1>Join YourFinances</StyledH1>
        <FormInputContainer>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            type='text'
            id={'firstName'}
            name={'firstName'}
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
            required
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            type='text'
            id={'lastName'}
            name={'lastName'}
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
            required
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id={'email'}
            name={'email'}
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            required
          />
        </FormInputContainer>
        <SubmitButton>Create account</SubmitButton>
      </RegisterForm>
    </StyledRegisterPage>
  );
}
