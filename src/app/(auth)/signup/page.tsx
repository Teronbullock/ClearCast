'use client';

import { useState } from 'react';

export const SignupPage = () => {
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }

    // Fake signup logic
    try {
      // TODO: replace with real API call
      console.log('Signing up:', form);
      setSuccess('Signup successful!');
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto p-6 bg-white rounded-lg shadow'
      >
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>

        <input
          type='email'
          name='email'
          placeholder='Email'
          value={form.email}
          // onChange={handleChange}
          required
          className='w-full mb-3 p-2 border rounded'
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
          required
          className='w-full mb-3 p-2 border rounded'
        />

        <input
          type='password'
          name='confirm'
          placeholder='Confirm Password'
          value={form.confirm}
          onChange={handleChange}
          required
          className='w-full mb-4 p-2 border rounded'
        />

        {error && <p className='text-red-500 mb-2'>{error}</p>}
        {success && <p className='text-green-500 mb-2'>{success}</p>}

        <button
          type='submit'
          className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignupPage;
