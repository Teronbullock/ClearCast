'use server';

import { signIn, signOut } from '@lib/auth';

export async function NextAuthLogin() {
  await signIn('github', { redirectTo: '/dashboard' });
}

export async function NextAuthLogout() {
  await signOut({ redirectTo: '/' });
}
