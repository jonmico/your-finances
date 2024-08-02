import { useState } from 'react';
import styled from 'styled-components';
import { apiCreateUser } from '../services/user-api';
import { Form } from '../ui/form';
import { FormHeader } from '../ui/form-header';
import { Error } from '../ui/error';
import { FormInputContainer } from '../ui/form-input-container';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { ButtonWithSpacing } from '../ui/button';
import { FormContainer } from '../ui/form-container';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setIsLoading(true);
    const { data, error } = await apiCreateUser(
      firstName,
      lastName,
      email,
      password
    );
    setIsLoading(false);

    if (error) {
      setError(error);
      return;
    }

    if (data) {
      setError('');
      setUser(data.user);
    }
  }

  if (isLoading) {
    return <div>Attemping to create account...</div>;
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Join YourFinances</FormHeader>
        {error && <Error>Error: {error}</Error>}
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
        <FormInputContainer>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            id={'password'}
            name={'password'}
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </FormInputContainer>
        <ButtonWithSpacing>Create account</ButtonWithSpacing>
      </Form>
    </FormContainer>
  );
}
