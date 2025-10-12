'use client';

import { useState } from 'react';

export const useSignUp = () => {
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError('');
    // setSuccess('');

    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      // TODO: replace with real API call
      console.log('Signing up:', form);
      setSuccess('Signup successful!');
    } catch (err) {
      setError('Signup failed');
      console.error(err);
    }
  };

  return { handleChange, handleSubmit, success, error, form };
};
