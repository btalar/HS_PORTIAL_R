import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import React, { FC } from 'react';

interface CreateUserModalProps{
    isOpen: boolean;
    onOpenChange: () => void;
}

export const CreateUserModal:FC<CreateUserModalProps> = ({ isOpen, onOpenChange }) => {
  const createUsers = async () => {
    try {
      const createUserCallable = httpsCallable(getFunctions(), 'createUser');
      const response = await createUserCallable();
      console.log(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="3xl"
      classNames={{
        backdrop: 'bg-[#000]/50 backdrop-opacity-40',
        base: 'border-[#292f46] bg-[#fff] dark:bg-[#ffff] text-[#000]',
        closeButton: 'hover:bg-white/5 active:bg-white/10',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Dodaj uzytkownika</ModalHeader>
            <ModalBody>
              <Input type="email" label="Email" variant="bordered" />
            </ModalBody>
            <ModalFooter>
              <Button variant="light" color="danger" onPress={onClose}>
                Anuluj
              </Button>
              <Button color="primary" onPress={() => createUsers()}>
                Zapisz
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
