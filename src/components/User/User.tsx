import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User as UserComponent } from '@nextui-org/react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../config';
import { userStore } from '../../store';

export const User: FC = () => {
  const navigate = useNavigate();

  const { email } = userStore((state) => state.user);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('./login');
      }
    });
    return () => {
      listen();
    };
  }, [navigate]);

  const userLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('state');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <UserComponent
          name={email}
          avatarProps={{ src: 'https://avatars.githubusercontent.com/u/30373425?v=4' }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={userLogout} key="delete" className="text-danger" color="danger">
          logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

  );
};
