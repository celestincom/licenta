import { useRouter } from 'next/router';
import { useCallback } from 'react';

export function useLogout() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  }, [router]);

  return { handleLogout };
}
