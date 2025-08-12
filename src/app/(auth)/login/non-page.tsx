'use client';

// import { useState } from 'react';
// import { NextAuthLogin, NextAuthLogout } from '@app/actions/next-auth-actions';

// export const LoginPage = () => {
// const [form, setForm] = useState({ email: '', password: '', confirm: '' });
// const [error, setError] = useState('');
// const [success, setSuccess] = useState('');

// const handleNextAuthLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setForm({ ...form, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setError('');
//   setSuccess('');

//   if (form.password !== form.confirm) {
//     setError('Passwords do not match');
//     return;
//   }

//   // Fake signup logic
//   try {
//     // TODO: replace with real API call
//     console.log('Signing up:', form);
//     setSuccess('Signup successful!');
//   } catch (err) {
//     setError('Signup failed');
//   }
// };

//   return (
//     <>
//       <form
//         // onSubmit={handleSubmit}
//         className='max-w-md mx-auto p-6 bg-white rounded-lg shadow'
//       >
//         <h2 className='text-2xl font-bold mb-4'>Login</h2>

//         <input
//           type='email'
//           name='email'
//           placeholder='Email'
//           // value={form.email}
//           // onChange={handleChange}
//           required
//           className='w-full mb-3 p-2 border rounded'
//         />

//         <input
//           type='password'
//           name='password'
//           placeholder='Password'
//           // value={form.password}
//           // onChange={handleChange}
//           required
//           className='w-full mb-3 p-2 border rounded'
//         />

//         {/* {error && <p className='text-red-500 mb-2'>{error}</p>}
//         {success && <p className='text-green-500 mb-2'>{success}</p>} */}

//         <button
//           type='submit'
//           className='w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 mb-[1.5rem]'
//         >
//           Login
//         </button>
//       </form>
//       <button
//         type='button'
//         onClick={NextAuthLogin}
//         className='bg-red-600 text-white p-2 rounded hover:bg-red-700 w-[50%] mx-auto block'
//       >
//         Github
//       </button>
//       <button
//         type='button'
//         onClick={NextAuthLogout}
//         className='bg-blue-200 text-white p-2 rounded'
//       >
//         logout
//       </button>
//     </>
//   );
// };

// export default LoginPage;
