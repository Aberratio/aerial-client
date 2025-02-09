'use client';

import { useEffect } from 'react';
import { createLocaleCookie } from '@/app/action';

export const CookieSetter = ({ token }: { token: string }) => {
  useEffect(() => {
    createLocaleCookie(token);
  }, []);
  return <></>;
};
