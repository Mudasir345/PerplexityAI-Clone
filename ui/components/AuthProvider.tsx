"use client";

import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebaseConfig';
import Login from '@/components/Login';
import { Toaster } from 'sonner';
import Sidebar from '@/components/Sidebar';
import { signOut } from 'firebase/auth'; // Import signOut from Firebase

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const handleAuthChange = (user: any) => {
      if (!user) {
        // Clear sessionStorage when user is not logged in
        sessionStorage.removeItem('user');
      } else {
        // Store user details in sessionStorage
        sessionStorage.setItem('user', JSON.stringify(user));
      }
    };

    const unsubscribe = auth.onAuthStateChanged(handleAuthChange);

    return () => {
      unsubscribe(); // Cleanup the listener on unmount
      signOut(auth)  // Sign out the user when the component unmounts
        .then(() => {
          sessionStorage.removeItem('user'); // Ensure session storage is cleared
        })
        .catch((error) => {
          console.error('Sign out error:', error);
        });
    };
  }, []);

  if (loading) {
    return <div>Loading....</div>;  // Loading state
  }

  return (
    <>
      {user ? (
        <>
          <Sidebar>{children}</Sidebar>
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                toast: 'bg-light-primary dark:bg-dark-secondary dark:text-white/70 text-black-70 rounded-lg p-4 flex flex-row items-center space-x-2',
              },
            }}
          />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
