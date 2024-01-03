import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC } from 'react';

interface ModalComponentProps {
    title: string;
    onYes: (data:any) => void;
    onNo?: () => void;
    showModal?: boolean;
}

export const ModalComponent: FC<ModalComponentProps> = ({ title, showModal, onYes, onNo }) => (
  <Modal
    size="4xl"
    backdrop="opaque"
    isOpen={showModal}
    onOpenChange={onNo}
    motionProps={{
      variants: {
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
        exit: {
          y: -20,
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: 'easeIn',
          },
        },
      },
    }}
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Modal {title}</ModalHeader>
          <ModalBody>
            Create USer
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={() => { onYes('asd'); }}>
              Action
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
);
