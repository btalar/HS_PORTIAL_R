import { Button, useDisclosure } from '@nextui-org/react';
import { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PlusCircle } from 'react-feather';

import { PageTitle } from '../../../components/PageTitle';
import { CreateUserModal } from './components/CreateUserModal/CreateUserModal';
import { UserManagementTable } from './components/UserManagementTable';

export const UserManagement:FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <PageTitle
        title="Użytkownicy"
        actions={(
          <Button
            size="lg"
            startContent={<PlusCircle />}
            color="primary"
            onPress={onOpen}
          >
            Dodaj Używtkownika
          </Button>
        )}
      />
      <UserManagementTable />
      <CreateUserModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
