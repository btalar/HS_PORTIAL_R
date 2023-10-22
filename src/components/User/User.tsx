import { Button } from '@nextui-org/react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebase';

export const User: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('./login');
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('state');
    }).catch(() => {
      console.log('some Error');
    });
  };
  return (
    <>
      <h1>User</h1>
      <Button color="primary" onClick={userLogout}>Logout</Button>
    </>
  );
};
