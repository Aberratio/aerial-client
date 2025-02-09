'use server';

import { cookies } from 'next/headers';

export async function createLocaleCookie(token: string) {
  const cookieStore = await cookies();

  if (token === '') {
    return;
  }
  if (token === process.env.NEXT_PUBLIC_TOKEN) {
    cookieStore.set('token', token as string);
  }
}
