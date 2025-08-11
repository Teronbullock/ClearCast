'use server';

import { signIn, signOut } from '@lib/auth';

export const NextAuthLogin = async () => {
  await signIn('github', { redirectTo: '/dashboard' });
};

export const NextAuthLogout = async () => {
  await signOut({ redirectTo: '/' });
};
